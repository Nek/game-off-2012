function start() {


    var b = Builder._$, C = anm.C;
    var b = Builder._$, C = anm.C, ajax = anm.ajax;
    var fhsv = Builder.fhsv;
    var player = createPlayer('canv', {'zoom':2.0,'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#597dce" }}});
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

    Math.seedrandom("GitRunner");

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
         * frame += dt;
         * frame = anim[time*fps%anim.length];
         */
        
        
        var makeCloud = function(x,y,name) {
            return b().band([0,Number.MAX_VALUE]).image([x,y], name);
        };

        var clouds1 = b().band([0,Number.MAX_VALUE]);
        
        var i;
        for (i = 0; i < 7 ; i ++) {
            clouds1.add(makeCloud(Math.random()*(WIDTH/32 - 3)*32, Math.random()*(HEIGHT/32 - 1)*32, ["cloud1.png","cloud2.png","cloud3.png","cloud4.png","cloud4.png","cloud2.png"][Math.floor(Math.random()*6)]));
        }
        var clouds = b().band([0,Number.MAX_VALUE])
                .add(b(clouds1))
                .add(b(clouds1).move([WIDTH,0]));
        

        var view = b().band([0,Number.MAX_VALUE]);
        view.add(level).add(avatar);
        var scores_meter = b().band([0,Number.MAX_VALUE])
                .text([20,10],"1000",14).nostroke(); 
        var game_screen = b().band([0,Number.MAX_VALUE]);        
        game_screen
            .add(clouds)
            .add(view)
            .add(scores_meter);
        scene.add(game_screen);
        game_screen.disable();

        /*
         * 65 - 90
         * A  - Z
         * 
         * set_text(over_screen)
         * "asdasdsa".map(function(el){}
         * "adasdasdsad".split('').map(function(ch){return ch.charCodeAt(0) - 65})
         */

        var add_super_string = function(el, s) {
            var l = s.length;
            var ss = b('super string').band([0,Number.MAX_VALUE]);
            var i;
            var letters = [];
            var places = [];
            for (i = 0; i < l; i ++) {
                var lett = b('letter').band([0,Number.MAX_VALUE]).sprite([0, 0],'large_font.png', [48, 48], 0);
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
                    letters[i].x.frame = codes[i] - 65;
                    letters[i].trans([i * 0.1, 0.5 + i * 0.1 ],[[ dx, dy + 48*3 ],[dx, dy]],C.E_QINOUT);
                    var d = Math.random()*2*Math.PI;
                    var nx = Math.cos(d)*WIDTH;
                    var ny = Math.sin(d)*HEIGHT;
                    letters[i].trans([100, 100.5],[[ 0, 0 ],[nx, ny]]);
                    if (codes[i] === 32) dx += 12;
                    else dx += 48;
                    if (codes[i] === 10) {
                        dx = 0;
                        dy += 48;
                    }
                }
            };
            el.add(ss);
            set_super_string(s);
            return set_super_string;
        };
        
        var over_screen = b().band([0,Number.MAX_VALUE]);
        over_screen.x.pos = [60+6,48-6];
        add_super_string(over_screen, "GAME\nOVER");
        
        scene.add(over_screen);
        over_screen.disable();
        
        var won_screen = b().band([0,Number.MAX_VALUE])
                .text([WIDTH/2,HEIGHT/2], "YOU HAVE WON",36).fill("green").nostroke();
        scene.add(won_screen);
        won_screen.disable();
        
        var load_screen =  b().band([0,Number.MAX_VALUE])
                .text([WIDTH/2,HEIGHT/2], "LOADING",36).fill("green").nostroke();
        scene.add(load_screen);
        
        var states = {
            load_loop: {
                inside: function() {
                    console.log("loading level");
                },
                exit: function() {
                    load_screen.disable();
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
                    scores_meter.x.text.lines = Math.floor(scores).toString();
                    clouds.x.pos[0] -= 10*dt; 
                    clouds.x.pos[0] %= WIDTH;
                }
            },
            over_loop: {
                enter: function() {
                    over_screen.enable();
                    var ct = player.state.time;
                    over_screen.time(function(t){ if (t - ct > 50) return 50; else return t - ct;});
                },
                exit: function() {
                    var ct = player.state.time - 100;
                    over_screen.time(function(t){ return t - ct;});
                }
            },
            won_loop: {
                enter: function() {
                    won_screen.enable();
                },
                inside: function(scores) {
                    won_screen.x.text.lines = Math.floor(scores).toString();
                },
                exit: function(){
                    won_screen.disable();
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
        var fuel = 100;
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

            if (player_x > TILES[TILES.length - 1][0] + TILES[TILES.length - 1][2] + 150) {
                scores *= 2;
                return won_loop;
            }

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
            
            var states = {
                thrust: function() {
                    player_vy += G*dt / 5;
                    fuel -= 100 * dt;
                    player_vx -= player_ax * dt / 5;
                    if (player_vx < 0) player_vx = 0;
                    prev = "thrust";
                },
                jump: function() {
                    fuel = 100;
                    player_vy = -120;
                    prev = "jump";
                },
                run: function() {
                    fuel = 100;
                    player_vy = G * dt;
                    player_vx += player_ax * dt;
                    prev = "run";
                },
                fall: function() {
                    fuel = 0;
                    player_vy += G * dt;
                    player_vx -= player_ax * dt / 5;
                    if (player_vx < 0) player_vx = 0;
                    prev = "fall";
                },
                drop: function() {
                    player_vy = 200;
                    player_vx -= player_ax * dt / 5;
                    if (player_vx < 0) player_vx = 0;
                    prev = "drop";
                }
            };
            
            

            var prev = "";

            /*
             * Calculate player's y velocity
             */
            
            if ( y_coll === 'LEG BUMP' )
            {
                if ( input('SPACE') ) states.jump();
                else states.run();
            } else {
                if ( input('SPACE') && fuel > 0 ) states.thrust();
                else if (input('SPACE')) states.drop();
                else states.fall();
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
            render("over_loop");
            return over_loop;
        };
        var won_loop = function(input, render){
            if (input("SPACE")) return new_game();
            render("won_loop", [scores]);
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

        var name = "component";
        var repo = "dom";
        //var url = "http://pipes.yahoo.com/pipes/pipe.run?_id=1749e2b7d58eb7f46134936f7a134f21&_render=json&name=" + name  + "&repo=" + repo;
        var url = "http://localhost:3000/?name=" + name  + "&repo=" + repo;
        url = 'http://0.0.0.0:8080/level.json';
        var req =  createCORSRequest('GET', url);
        req.onload = function() {
            TILES = JSON.parse(req.responseText).value.items.map(function(el){ return [el.time*UNIT, el.space*UNIT + 160/2,UNIT,UNIT,el.message];});
        };
        req.onerror = function() {
            console.log("error");
        };
        req.send();
        return load_loop;
    };

    var load_loop = function() {
        render("load_loop");
        if (TILES.length === 0) return load_loop;
        return new_game();
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
        case 32:
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
    document.addEventListener('keydown', function(e){input(codeToName(e.keyCode), true);});
    document.addEventListener('keyup', function(e){input(codeToName(e.keyCode), false);});
    document.getElementById('canv').getContext('2d').webkitImageSmoothingEnabled = false;
}
