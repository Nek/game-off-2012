var start, start2;
start = function()
 {   
    var b = Builder._$, C = anm.C, ajax = anm.ajax;

var preload = ["avatar.png","flag.png", "cloud1.png", "cloud2.png", "cloud3.png", "cloud4.png", "small_font.png", "large_font.png", "tile_bricks.png"];

    var i;
    var cb = function(e) {
        preload.splice(preload.indexOf(e), 1);
        if (preload.length === 0) start2(b, C, ajax);
    };
    for ( i = 0; i < preload.length; i ++) {     
        b().image([0,0], preload[i], cb);
    }
};

start2 = function(b, C, ajax) {
    function animate(spr, desc) {
        /*
         + 1. desc == []
         + 2. desc == {frames:[]}
         + 2. desc == {name:[]}
         + 2. desc == {name:[], name2: [], name3: []}
         + 2. desc == {fps:24, name:[], name2: [], name3: []}
         3. desc == {name:{frames:[],fps:24}}
         4. desc == {name:{frames:[],fps:24},name2:{frames:[],fps:24, loop: true},name3:{frames:[],fps:24}}
         5. desc == {name:{frames:[],fps:24},name2:{frames:[],fps:24, loop: true},name3:{frames:[],fps:24}}
         */
        var FPS = 24;

        var sd = superduck();
        var is = sd.is;
        var parseAnim;
        var time = 0;
        var playing = true;

        /*
         return adhoc objects composed from functionality
         */

        parseAnim = sd.methods(
            [{frames:Array, fps:Number}, function(v) {return (function(anim) {
                console.log("Anim desc is {frames:[]}");
                var FPS = v.fps;
                spr.play = function() {
                    playing = true;
                };
                spr.stop = function() {
                    playing = false;
                };
                return function(t,d) {
                    if (playing) time = t*d;
                    spr.x.frame = anim.length === 1 ? anim[0] : anim[Math.floor(time*FPS%anim.length)];
                };
            })( v.frames);}],
            [{frames:Array}, function(v) {return (function(anim) {
                console.log("Anim desc is {frames:[]}");
                spr.play = function() {
                    playing = true;
                };
                spr.stop = function() {
                    playing = false;
                };
                return function(t,d) {
                    if (playing) time = t*d;
                    spr.x.frame = anim.length === 1 ? anim[0] : anim[Math.floor(time*FPS%anim.length)];
                };
            })( v.frames);}],
            [[], function(v) {return (function(anim) {
                console.log("Anim desc is Array");
                spr.play = function() {
                    playing = true;
                };
                spr.stop = function() {
                    playing = false;
                };
                return function(t,d) {
                    if (playing) time = t*d;
                    spr.x.frame = anim.length === 1 ? anim[0] : anim[Math.floor(time*FPS%anim.length)];
                };
            })(v);}],
            [{fps:Number}, function(v) {return (function(anims) {
                console.log("Anim desc is {fps:Number}");
                var FPS = anims.fps;
                delete anims.fps;
                var keys = Object.keys(anims);
                if (keys.length === 0) throw new Error("The anima config object is empty.");
                var anim = anims[keys[0]];
                spr.switch = function(name) {
                    anim = anims[name];
                };
                spr.play = function() {
                    playing = true;
                };
                spr.stop = function() {
                    playing = false;
                };
                return function(t,d) {
                    if (playing) time = t*d;
                    spr.x.frame = anim.length === 1 ? anim[0] : anim[Math.floor(time*FPS%anim.length)];
                };
            })(v);}],
            [{}, function(v) {return (function(anims) {
                console.log("Anim desc is Object");
                var keys = Object.keys(anims);
                if (keys.length === 0) throw new Error("The anima config object is empty.");
                var anim = anims[keys[0]];
                spr.switch = function(name) {
                    anim = anims[name];
                };
                spr.play = function() {
                    playing = true;
                };
                spr.stop = function() {
                    playing = false;
                };
                return function(t,d) {
                    if (playing) time = t*d;
                    spr.x.frame = anim.length === 1 ? anim[0] : anim[Math.floor(time*FPS%anim.length)];
                };
            })(v);}]
        );

        spr.modify(parseAnim(desc));

        return spr;
    }

    var WIDTH = 320;
    var HEIGHT = 180;
 
    var canv = document.getElementById('canv');
    var ctx = canv.getContext('2d');
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var is_safari = ctx.webkitBackingStorePixelRatio && !is_chrome;
    var zoom = 2.0;
  
    if (is_safari) {
        zoom = 1.0;
    }

    var player = createPlayer('canv', {'zoom': zoom,'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#0082ff" }}});
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;

    if (is_safari) {
        canv.width = WIDTH;
        canv.height = HEIGHT;        
    }
 
 
    var music = AudioFX('sfx/music', { formats: ['ogg', 'mp3'], loop: true, autoplay: true });
    var jumpfx = AudioFX('sfx/jump', { formats: ['ogg', 'mp3'], pool: 10 });
    // from http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
    var getQueryVariable = function(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        var i;
        for (i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    };

    /*
     * Repo to use as level
     */

    var serv = "http://198.57.44.185/";
    var name = getQueryVariable('name') || "component";
    var repo = getQueryVariable('repo') || "dom";
    
    /*
     * Init input handling system.
     * The returned function is polymorphic and works as simple dictionary of Numbers to Booleans.
     * Number -> Boolean -> Boolean
     * Number -> Boolean
     * The ability to set values is workaround to use it with Animatron player.
     * In the end it shall be built in animatron's player loop.
     */
    var input = (function() {
        var eventMap = {};
        var reset = function() {
            eventMap.SPACE = false;
            eventMap.LEFT = false;
            eventMap.RIGHT = false;
            eventMap.CLICK = false;
        };
        return function(name, val) {
            if (name === true) {
                reset();
                return undefined;
            }
            if (val !== undefined) eventMap[name] = val;
            return eventMap[name];
        };
    })();

    /*
     * Some constants
     */
    var G = 400;
    var UNIT = 16;
    var PLAYER_SIZE = UNIT*0.75;
    
    var TILES = [];

    var HAZARDS = [];//[[400,200-50,20,20]];     

    /*
     * Create scene to hold it all together.
     */
    var scene = b().band([0,Number.MAX_VALUE]);

    if (Math.seedrandom) Math.seedrandom(name+repo);

    /*
     * 65 - 90
     * A  - Z
     * 
     * set_text(over_screen)
     * "asdasdsa".map(function(el){}
     * "adasdasdsad".split('').map(function(ch){return ch.charCodeAt(0) - 65})
     */

    var fonts = {};

    var add_super_string = function(el, s, fnt, dim, a_pos, fn) {
        var font;
        if (fonts[fnt] === undefined) {
            font = fonts[fnt] = b('font').band([0,Number.MAX_VALUE]).sprite([0, 0], fnt, dim, 0);
        } else font = font = fonts[fnt];
        var l = s.length;
        var ss = b('super string').band([0,Number.MAX_VALUE]);
        var i;
        var letters = [];
        for (i = 0; i < l; i ++) {
            var lett = b(font);//.band([0,Number.MAX_VALUE]).sprite([0, 0], fnt, dim, 0);
            /*
             * 1. letter
             * 2. place
             */
            ss.add(lett);
            letters.push(lett);
        }
        var set_super_string = function(s) {
            var codes = s.split('').map(function(ch){return ch.charCodeAt(0);});
            var l = letters.length;
            var i;
            var dx = 0;
            var dy = 0;
            for (i = 0; i < l; i ++) {
                letters[i].x.frame = codes[i] - 65 + a_pos;
                if (fn !== undefined) fn(letters, i, dim, dx, dy);
                else {
                    letters[i].x.pos = [dx, dy];
                }
                if (codes[i] === 32) dx += dim[0]/4;
                else dx += dim[0];
                if (codes[i] === 10) {
                    dx = 0;
                    dy += dim[1];
                }
            }
        };
        el.add(ss);
        set_super_string(s);
        return set_super_string;
    };

    var large_text_animator = function(letters, i, dim, dx, dy) {
        letters[i].trans([i * 0.1, 0.5 + i * 0.1 ],[[ dx, dy + dim[1]*3 ],[dx, dy]],C.E_QINOUT);
        var d = Math.random()*2*Math.PI;
        var nx = Math.cos(d)*WIDTH*1.5;
        var ny = Math.sin(d)*HEIGHT*1.5;
        letters[i].trans([100, 100.5],[[ 0, 0 ],[nx, ny]]);
    };

    /*
     * Init rendering.
     * This step creates level and avatar objects for animatron's player.
     * The returned function takes game world specific values and updates those objects accordingly.
     * It would evolve with every change to the game world.
     */
    var render = (function(scene) {
        var level = b().band([0, Number.MAX_VALUE]);
        
        var avatar = b().band([0,Number.MAX_VALUE])
                .sprite([0,0], "avatar.png", [12, 12], 0);
        animate( avatar,
            {
                fps:4,
                run:[0, 1],
                jump:[2],
                jump2:[2],
                thrust:[2],
                fall:[4],
                drop:[5]
            }
        );

        var flag = b().band([0, Number.MAX_VALUE])
                .sprite([0,0], "flag.png", [12,12], 0);

        animate(flag, {fps: 12, frames:[0,1,2,3,4,5]});

        var make_cloud = function(x,y,name) {
            return b().band([0,Number.MAX_VALUE]).image([x,y], name);
        };

        var clouds1 = b().band([0,Number.MAX_VALUE]);
        
        var i;
        for (i = 0; i < 7 ; i ++) {
            clouds1.add(make_cloud(Math.random()*(WIDTH/32 - 3)*32, Math.random()*(HEIGHT/32 - 1)*32, ["cloud1.png","cloud2.png","cloud3.png","cloud4.png","cloud4.png","cloud2.png"][Math.floor(Math.random()*6)]));
        }
        var clouds = b().band([0,Number.MAX_VALUE])
                .add(b(clouds1))
                .add(b(clouds1).move([WIDTH,0]));

        var view = b().band([0,Number.MAX_VALUE]);
        view.add(level).add(avatar);
        
        var scores_meter = b().band([0,Number.MAX_VALUE]);
        scores_meter.x.pos = [8,8];
  
        var update_scores = add_super_string(scores_meter, "00000000000000000000", 'small_font.png', [8,8], 33);
 
        var game_screen = b().band([0,Number.MAX_VALUE]);        
        
         game_screen
            .add(view)
            .add(scores_meter);
        scene.add(clouds);
        scene.add(game_screen);
        game_screen.disable();

        var error_screen = b().band([0,Number.MAX_VALUE]);
        error_screen.disable();
        error_screen.x.pos = [48,48-6];
        add_super_string(error_screen, "LOAD\nERROR", 'large_font.png', [48,48], 0);
             
        scene.add(error_screen);
        
        var over_screen = b().band([0,Number.MAX_VALUE]);
        over_screen.disable();
        over_screen.x.pos = [60+6,48-6];
        add_super_string(over_screen, "GAME\nOVER", 'large_font.png', [48,48], 0, large_text_animator);
        
        scene.add(over_screen);
                
        var won_screen = b().band([0,Number.MAX_VALUE]);
        won_screen.x.pos = [12+6,48-6];
        add_super_string(won_screen, "DOUBLE\nSCORES", 'large_font.png', [48,48], 0, large_text_animator);
                
        scene.add(won_screen);
        won_screen.disable();
        
        var load_screen =  b().band([0,Number.MAX_VALUE]);
        load_screen.x.pos = [12+6,48-6];
        add_super_string(load_screen, "PLEASE\nWAIT", 'large_font.png', [48,48], 0, large_text_animator);
        scene.add(load_screen);

        var states = {
            error_loop: {
                enter: function() {
                    error_screen.enable();
                },
                exit: function(){
                    error_screen.disable();
                }
            },
            load_loop: {
                 enter: function() {
                     load_screen.enable();
                     var ct = player.state.time;
                     load_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                 },
                exit: function(){
                    var ct = player.state.time - 100;
                    load_screen.time(function(t){ return t - ct;});
                }
            },
            game_loop: {
                init: function() {
                    var i;
                    var r;
                    for (i = 0; i < TILES.length; i++) {
                        r = TILES[i];
                        level.add(b().band([0, Number.MAX_VALUE])
                                  .image([r[0],r[1]],"tile_bricks.png")
                                  .nostroke());
                    }
                    r = TILES[TILES.length-1];
                    level.add(flag);
                    flag.x.pos = [r[0]+r[2]-12,r[1]-12];
                    for (i = 0; i < HAZARDS.length; i++) {
                        r = HAZARDS[i];
                        level.add(b().band([0, Number.MAX_VALUE])
                                  .rect([r[0],r[1]],[r[2],r[3]])
                                  .reg([-r[2]/2, -r[3]/2])
                                  .fill('red'));
                    }
                },
                enter: function() {
                    flag.play();
                    avatar.play();
                    game_screen.enable();
                },
                inside: function(player_x, player_y, scores, dt, state){
                    var time = (new Date().getTime())/1000;
                    avatar.switch(state);
                    avatar.x.pos[0] = player_x;
                    avatar.x.pos[1] = player_y;
                    view.x.pos[0] = 100 - player_x;
                    update_scores(Math.floor(scores).toString());
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                }
            },
            over_loop: {
                enter: function() {
                    avatar.stop();
                    over_screen.enable();
                    var ct = player.state.time;
                    over_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                inside: function(player_x, player_y, scores, dt, state) {
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                    var time = (new Date().getTime())/1000;
                },
                exit: function() {
                    var ct = player.state.time - 100;
                    over_screen.time(function(t){ return t - ct;});
                }
            },
            won_loop: {
                enter: function() {
                    avatar.stop();
                    won_screen.enable();
                    var ct = player.state.time;
                    won_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                inside: function(player_x, player_y, scores, dt, state) {
                    update_scores(Math.floor(scores).toString());
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                    var time = (new Date().getTime())/1000;
                },
                exit: function(){
                    var ct = player.state.time - 100;
                    won_screen.time(function(t){ return t - ct;});
                }
            }
        };
        
        var prev = '';

        return function(s, params){
            if (s !== prev) {
                if (states[prev] && states[prev].exit) states[prev].exit();
                if (states[s] && states[s].enter) {
                    if (states[s].dirty === undefined) {
                        if (states[s].init) states[s].init();
                        states[s].dirty = true;
                    }
                    states[s].enter();
                }
            } else {
                if (states[s] && states[s].inside) states[s].inside.apply(this,params);
            }
            prev = s;
        };
    })(scene);

    /*
     * Init world.
     * Creates game world which is a function of input.
     * The contract for input is:
     * Number -> Boolean
     * So the game knows which key is pressed in the current game cycle.
     */
    var new_game = function () {

	var player_x = 0;
	var player_y = 0;
        var player_vx = 0;
        var player_vy = 0;

        var commits = 0;
        var scores = 0;
        
        var player_ax = 40;
        var fuel = 70;

        var current_time = new Date().getTime();

        /*
         *  Helper function to transform game specific values into collision detection specific representation.
         */ 
        var rect = function (x, y, w, h) {
            return [
                [x,y],
                [x+w,y],
                [x+w,y+h],
                [x, y+h]
            ];
        };

        var multicollide = function(r, rs) {
            var i = 0;
            var l = rs.length;
            for (i; i < l; i ++)
            {
                var res = collide(r, rs[i]);
                if (res) return res;
            }
            return false;
        };

        var PLATFORMS = TILES.reduce(function(res,curr,i,arr){
            var last = res[res.length-1];
            if (curr[0] === last[0]+last[2] && curr[1] === last[1]) {
                last[2] += UNIT;
                return res;
            } 
            res.push(curr);
            return res;
        }, [TILES[0]]);


        var platforms = PLATFORMS.map(function(el ,i ,arr){ return rect(el[0],el[1],el[2],el[3]);});

        var hazards = HAZARDS.map(function(el){return rect(el[0],el[1],el[2],el[3]);});

        var flag_floor = TILES[TILES.length-1];
        var flag_rect =  rect( flag_floor[0] + flag_floor[2] - UNIT/2, flag_floor[1] - UNIT, UNIT/2, UNIT);

        var prev = "";
        var dt = 0;
        var second_jump = false;
        
        function thrust(dt) {
            player_vy += G*dt / 5;
            fuel -= 100 * dt;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "thrust";
        }
        function jump(dt) {
            second_jump = false;
            fuel = 70;
            player_vy = -120;
            prev = "jump";
        }
        function  jump2(dt) {
            second_jump = true;
            fuel = 0;
            player_vy = -180;
            prev = "jump2";
        }
        function run(dt) {
            second_jump = false;
            fuel = 70;
            player_vy = G * dt;
            player_vx += player_ax * dt;
            prev = "run";
        }
        function  fall(dt) {
            fuel = 0;
            player_vy += G * dt;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "fall";
        }
        function drop(dt) {
            player_vy = 200;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "drop";
        }

        var states = {
            thrust: thrust,
            run: run,
            jump: jump,
            jump2: jump2,
            fall: fall,
            drop: drop
        };
        
        function  game_loop(input, render){

            /*
             * Calculate delta time
             */
            var time = new Date().getTime();
            var dt = (time - current_time) / 1000;
            current_time = time;
            
            /*
             * Update position using delta time
             */

            player_x += player_vx * dt;
            player_y += player_vy * dt;

            /*
             * Game won rule
             */

            var flag_coll = multicollide(rect(player_x, player_y, PLAYER_SIZE, PLAYER_SIZE), [flag_rect]); 
            if (flag_coll) {
                scores *= 2;
                return [won_loop, [player_x, player_y, scores, dt, prev]];
            }
            /*
             * Game over rule
             */
            
            var hazard_coll = multicollide(rect(player_x, player_y, PLAYER_SIZE, PLAYER_SIZE), hazards); 
            if (hazard_coll || player_y > 360 + 50) return [over_loop];
            
            var platf_coll = multicollide(rect(player_x, player_y, PLAYER_SIZE, PLAYER_SIZE), platforms);
            var xd = player_vx > 0 ? 1 : (player_vx < 0 ? -1 : 0);
            var yd = player_vy > 0 ? 1 : (player_vy < 0 ? -1 : 0);

            ///////////////////////
            //  motion           //
            //  -1 up            //
            //  1 down           //
            //  collision vector //
            //  -1 legs          //
            //  1 head           //
            ///////////////////////

            var y_coll = 'NONE';
            
            if ( platf_coll && platf_coll.normal.y === 1 && yd === -1 ) y_coll = 'HEAD BUMP';
            if ( platf_coll && platf_coll.normal.y === -1 && yd === 1 ) y_coll = 'LEG BUMP';

            /*
             * Don't let player's legs fall through floor, but let it go through for everything else.
             */
            if (y_coll === 'LEG BUMP') {
                player_x -= platf_coll.overlap * platf_coll.normal.x;
                player_y -= platf_coll.overlap * platf_coll.normal.y;
            }

            /*
             * Calculate player's y velocity
             */

            /*
             * TODO:
             * Rework following into object map
             * with set of coll.input.action fields
             */

            /*
             * Possible player states:
             * run
             * jump
             * thrust
             * jump2
             * fall
             * 
             * 
             * player = player(on_legs, action, second_jump);
             */

            var on_legs = y_coll === 'LEG BUMP';
            var action = input('SPACE');

            if ( on_legs )
            {
                if ( action ) {
                    jumpfx.play();
                    states.jump(dt);
                }
                else {
                    states.run(dt);
                }
            } else {
                if ( action && !second_jump ) {
                    if (fuel > 0) states.thrust(dt);
                    else {
                        jumpfx.play();
                        states.jump2(dt);
                    }
                }
                else {
                    states.fall(dt);
                }
            }
            
            var new_commits = Math.floor(player_x / UNIT);
            scores += player_vx * dt;
            if (new_commits > commits) {
                scores += (new_commits - commits) * player_vx / 10;
            }
            commits = new_commits;

            return [game_loop, [player_x, player_y, scores, dt, prev]];
	}
        function  over_loop(input, render){
            if (input("SPACE")) return new_game();
            /*
             * Calculate delta time
             */
            var time = new Date().getTime();
            var dt = (time - current_time) / 1000;
            current_time = time;

            return [over_loop, [player_x, player_y, scores, dt, prev]] ;
        }
        function   won_loop(input, render){
            if (input("SPACE")) return new_game();
            /*
             * Calculate delta time
             */
            var time = new Date().getTime();
            var dt = (time - current_time) / 1000;
            current_time = time;
            return [won_loop, [player_x, player_y, scores, dt, prev]];
        }
        return [game_loop, [player_x, player_y, scores, dt, prev]];
    };

    function init_loop() {
        if (typeof window.level === "undefined")
        {
            var start = 0;
            var end = 500;
        
            var url = serv + "?name=" + name  + "&repo=" + repo + "&start=" + start + "&end=" + end;
 
            ajax(url, function(e){
                TILES = JSON.parse(e.responseText || "null");
                if (TILES !== null) TILES = TILES.commits.map(function(el){ return [el.time*UNIT, el.space*UNIT + 160/2,UNIT,UNIT,el.message];});
            });
        }
        else {
            TILES = level.commits.map(function (el) {
                return [el.time * UNIT, el.space * UNIT + 160 / 2, UNIT, UNIT, el.message];
            })}
        return [load_loop];
    }

    function load_loop() {
        if (TILES === null) return [error_loop];
        if (TILES.length === 0) return [load_loop];
        return new_game();
    }

    function  error_loop() {
        if (input('SPACE')) return [init_loop];
        return [error_loop];
    }
    
    /*
     * This glues everything together.
     * I don't like the use of keyboard events and closure to pass input to the world.
     * I'd prefer to turn on, off events on a player's object so they are passed to every modifier attached.
     * Draft:
     * scene.registerKeyEvent('SPACE')
     *      .modify(function(t, input){
     *          var is_pressed = input('SPACE');
     *          // false if it's not pressed in the current player's cycle
     *          // true if pressed in the current player's cycle
     *      })
     */

    var codeToName = function(kc) {
        switch(kc) {
        case 90:
            return 'SPACE';
        case 37:
            return 'LEFT';
        case 39:
            return 'RIGHT';
        default:
            return undefined;
        }
    };

    var world = [init_loop];

    scene
        .modify(function(){
            world = world[0](input);
            render(world[0].name, world[1]);
        });

    player.load(scene).play();
    /*
     * Smoothed image fix
     */
    document.addEventListener('keydown',
    function(e){input(codeToName(e.keyCode), true);});
    document.addEventListener('keyup',
    function(e){input(codeToName(e.keyCode), false);});
}
