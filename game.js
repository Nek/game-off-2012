function start() {

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
    

    var b = Builder._$, C = anm.C, ajax = anm.ajax;
    var fhsv = Builder.fhsv;
    var player = createPlayer('canv', {'zoom':2.0,'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#0082ff" }}});
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

    var WIDTH = 320;
    var HEIGHT = 180;
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
        var places = [];
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
        
        /*
         * Framebased animation is a function of time, playback speed and a list of frame property values.
         * ...x.frame = frame_based_animation(time, fps, [0,0,2,2]);
         * var anim = frame_based_animation(fps, [0,0,2,2]);
         * ...x.frame = anim(time);
         * -------------------------
         * ...x.anim = frame_based_animation(fps, [0,0,2,2]);
         * ...x.frame = ...x.anim(time);
         * ...x.play("jump");
         * ...x.play_next("jump");
         * if we want to name animations and switch them by name
         * ...x.frame = 
         */

        var flag = b().band([0, Number.MAX_VALUE])
                .sprite([0,0], "flag.png", [12,12], 0);

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
        add_super_string(load_screen, "LOADING", 'large_font.png', [48,48], 0, large_text_animator);
        scene.add(load_screen);

        var states = {
            error_loop: {
                enter: function() {
                    error_screen.enable();
                    //var ct = player.state.time;
                    //load_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                exit: function(){
                    error_screen.disable();
                    //var ct = player.state.time - 100;
                    //load_screen.time(function(t){ return t - ct;});
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
                    game_screen.enable();
                },
                inside: function(player_x, player_y, scores, dt, state){
                    var fps = 4;
                    var anims = {
                        run: [0,1],
                        jump: [2],
                        jump2: [2],
                        thrust: [2],
                        fall: [4],
                        drop: [5]
                    };
                    var time = (new Date().getTime())/1000;
                    var frame = anims[state].length === 1 ? anims[state][0] : anims[state][Math.floor(time*fps%2)];
                    avatar.x.frame = frame;
                    avatar.x.pos[0] = player_x;
                    avatar.x.pos[1] = player_y;
                    view.x.pos[0] = 100 - player_x;
                    update_scores(Math.floor(scores).toString());
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                    flag.x.frame = Math.floor(time*12%6);
                }
            },
            over_loop: {
                enter: function() {
                    over_screen.enable();
                    var ct = player.state.time;
                    over_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                inside: function(dt) {
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                    var time = (new Date().getTime())/1000;
                    flag.x.frame = Math.floor(time*12%6);
                },
                exit: function() {
                    var ct = player.state.time - 100;
                    over_screen.time(function(t){ return t - ct;});
                }
            },
            won_loop: {
                enter: function() {
                    won_screen.enable();
                    var ct = player.state.time;
                    won_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                inside: function(scores, dt) {
                    update_scores(Math.floor(scores).toString());
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                    var time = (new Date().getTime())/1000;
                    flag.x.frame = Math.floor(time*12%6);
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
     * Creates game world which is a function of input and render.
     * The contract for input is:
     * Number -> Boolean
     * So the game knows which key is pressed in the current game cycle.
     * The contract for render is:
     * Number -> Number -> undefined
     * It takes player's position and renders it on screen.
     * We don't care about the function's returned value.
     */
    var new_game = function () {
	var player_x = 0;
	var player_y = 0;
        var player_vy = 0;
        var player_vx = 0;

        var commits = 0;
        var scores = 0;
        
        var player_ax = 40;
        var fuel = 70;
        var on_legs = false;

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
        
        var thrust = function(dt) {
            player_vy += G*dt / 5;
            fuel -= 100 * dt;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "thrust";
        };
        var jump =  function(dt) {
            fuel = 70;
            player_vy = -120;
            prev = "jump";
        };
        var jump2 =  function(dt) {
            fuel = 0;
            player_vy = -180;
            prev = "jump2";
        };
        var run = function(dt) {
            fuel = 70;
            player_vy = G * dt;
            player_vx += player_ax * dt;
            prev = "run";
        };
        var fall = function(dt) {
            fuel = 0;
            player_vy += G * dt;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "fall";
        };
        var drop = function(dt) {
            player_vy = 200;
            player_vx -= player_ax * dt / 5;
            if (player_vx < 0) player_vx = 0;
            prev = "drop";
        };

        var states = {
            thrust: thrust,
            run: run,
            jump: jump,
            jump2: jump2,
            fall: fall,
            drop: drop
        };
        
        var game_loop = function(input, render){

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
                render("game_loop", [player_x, player_y, scores, dt, prev]);
                return won_loop;
            }
//            if (player_x > TILES[TILES.length - 1][0] + TILES[TILES.length - 1][2] + 150) {
 //               scores *= 2;
  //              return won_loop;
  //          }

            /*
             * Game over rule
             */
            
            var hazard_coll = multicollide(rect(player_x, player_y, PLAYER_SIZE, PLAYER_SIZE), hazards); 
            if (hazard_coll || player_y > 360 + 50) return over_loop;
            
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
            
            if ( y_coll === 'LEG BUMP' )
            {
                second_jump = false;
                if ( input('SPACE') ) states.jump(dt);
                else states.run(dt);
            } else {
                if ( !second_jump && input('SPACE') && fuel > 0 ) states.thrust(dt);
                else if ( !second_jump && input('SPACE') ) {
                    second_jump = true;
                    states.jump2(dt);
                }
                else states.fall(dt);
            }
            
            var new_commits = Math.floor(player_x / UNIT);
            scores += player_vx * dt;
            if (new_commits > commits) {
                scores += (new_commits - commits) * player_vx / 10;
            }
            commits = new_commits;

            render("game_loop", [player_x, player_y, scores, dt, prev]);

            return game_loop;
	};
        var over_loop = function(input, render){
            if (input("SPACE")) return new_game();
            /*
             * Calculate delta time
             */
            var time = new Date().getTime();
            var dt = (time - current_time) / 1000;
            current_time = time;

            render("over_loop", [dt]);
            return over_loop;
        };
        var won_loop = function(input, render){
            if (input("SPACE")) return new_game();
            /*
             * Calculate delta time
             */
            var time = new Date().getTime();
            var dt = (time - current_time) / 1000;
            current_time = time;
            render("won_loop", [scores, dt]);
            return won_loop;
        };
        return game_loop;
    };

    var init_loop = function() {
        var createCORSRequest = function(method, url){
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
            } else
            if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        };

        var start = 0;
        var end = 500;
        
        var url = serv + "?name=" + name  + "&repo=" + repo + "&start=" + start + "&end=" + end;
 
        ajax(url, function(e){
            TILES = JSON.parse(e.responseText || "null");
            if (TILES !== null) TILES = TILES.commits.map(function(el){ return [el.time*UNIT, el.space*UNIT + 160/2,UNIT,UNIT,el.message];});
        });
        return load_loop;
    };

    var load_loop = function() {
        render("load_loop");
        if (TILES === null) return error_loop;
        if (TILES.length === 0) return load_loop;
        return new_game();
    };

    var error_loop = function() {
        render("error_loop");
        if (input('SPACE')) return init_loop;
        return error_loop;
    };

    var world = init_loop;
    
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
    scene
        .modify(function(){
            world = world(input, render);
        });

    player.load(scene).play();
    /*
     * Smoothed image fix
     */
    document.addEventListener('keydown',
    function(e){input(codeToName(e.keyCode), true);});
    document.addEventListener('keyup',
    function(e){input(codeToName(e.keyCode), false);});
    document.getElementById('canv').getContext('2d').webkitImageSmoothingEnabled = false;
    document.getElementById('canv').getContext('2d').imageSmoothingEnabled = false;
}
