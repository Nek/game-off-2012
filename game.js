function start() {


    var b = Builder._$, C = anm.C;
    var fhsv = Builder.fhsv;

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
        eventMap.SPACE = false;
        eventMap.LEFT = false;
        eventMap.RIGHT = false;
        eventMap.CLICK = false;
        return function(name, val) {
            if (val !== undefined) eventMap[name] = val;
            return eventMap[name];
        };
    })();

    /*
     * Some constants
     */

    var WIDTH = 320;
    var HEIGHT = 180;
    var G = 200;
    var UNIT = 16;
    var PLAYER_SIZE = UNIT*0.75;
    //var PLATFORMS = [[0,200,200,30], [240,200,200,30], [140,140,200,30]];
    
    var TILES = LEVEL.commits.map(function(el){ return [el.time*UNIT, el.space*UNIT + 160/2,UNIT,UNIT,el.message];});

    PLATFORMS = TILES.reduce(function(res,curr,i,arr){
        var last = res[res.length-1];
        if (curr[0] === last[0]+last[2] && curr[1] === last[1]) {
            last[2] += UNIT;
            return res;
        } 
        res.push(curr);
        return res;
    }, [TILES[0]]);

    var HAZARDS = [];//[[400,200-50,20,20]];

    /*
     * Create scene to hold it all together.
     */
    var scene = b().band([0,Number.MAX_VALUE]);

    /*
     * Init rendering.
     * This step creates level and avatar objects for animatron's player.
     * The returned function takes game world specific values and updates those objects accordingly.
     * It would evolve with every change to the game world.
     */
    var render = (function(scene) {
        var level = b().band([0, Number.MAX_VALUE]);
        var i;
        var r;
        for (i = 0; i < TILES.length; i++) {
            r = TILES[i];
            ///////////////////////////////////////////////
            // level.add(b().band([0, Number.MAX_VALUE]) //
            //           .rect([r[0],r[1]],[r[2],r[3]])  //
            //           .reg([-r[2]/2, -r[3]/2])        //
            //           .nostroke());                   //
            ///////////////////////////////////////////////
            level.add(b().band([0, Number.MAX_VALUE])
                      .image([r[0],r[1]],"tile_bricks.png")
                      .nostroke());
//                .add(b().band([0, Number.MAX_VALUE]).text([r[0], r[1]], r[4], 24).nostroke().fill('red'));
        }
        
        for (i = 0; i < HAZARDS.length; i++) {
            r = HAZARDS[i];
            level.add(b().band([0, Number.MAX_VALUE])
                      .rect([r[0],r[1]],[r[2],r[3]])
                      .reg([-r[2]/2, -r[3]/2])
                      .fill('red'));
        }

        var avatar = b().band([0,Number.MAX_VALUE])
                .rect([0,0],[PLAYER_SIZE,PLAYER_SIZE])
                .reg([ -PLAYER_SIZE/2, -PLAYER_SIZE/2 ]);
        var game = b().band([0,Number.MAX_VALUE]);
        game.add(level).add(avatar);
        scene.add(game);

        var over = b().band([0,Number.MAX_VALUE])
                .text([WIDTH/2,HEIGHT/2], "GAME OVER",36).fill("red").nostroke();
        scene.add(over);
        over.disable();

        var states = {
                game_loop:{
                    enter: function(){
                        //game.enable();
                    },
                    inside: function(params){
                        avatar.v.xdata.pos[0] = params[0];
                        avatar.v.xdata.pos[1] = params[1];
                        game.v.xdata.pos[0] = 100 - params[0] - params[2]/10;
                    },
                    exit: function(){
                        //game.disable();
                    }
                },
                over_loop:{
                    enter: function() {
                        over.enable();
                    },
                    exit: function() {
                        over.disable();
                    }
                }
            };
        
        var prev = '';

        return function(s, params){
            /*
             * enter_state(s, function("game", function(){}))
             * in_state
             * exit_state
             */
            var run = function(f) {
                if (f) f();
            };
            try {
            if (s !== prev) {
                states[prev].exit();
                states[s].enter();
            } else {
                states[s].inside(params);
            }}
            catch(e){}
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
        var player_vx = 50;
        
        var player_ax = 0.5;
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
             * Game over rule
             */
            
            var hazard_coll = multicollide(rect(player_x, player_y, PLAYER_SIZE, PLAYER_SIZE), hazards); 
            if (hazard_coll || player_y > 360 + 50) return game_over;
            
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
            
            var thrust = function() {
                player_vy += G*dt / 5;
                fuel -= 100 * dt;
            };
            
            var jump = function() {
                player_vy = -120;
            };

            var stop = function() {
                fuel = 100;
                player_vy = G * dt;
            };
            var fall = function(){
                fuel = 0;
                player_vy += G * dt;
            };

            /*
             * Calculate player's y velocity
             */
            
            if ( y_coll === 'LEG BUMP' )
            {
                if ( input('SPACE') ) jump();
                else stop();
            } else {
                if ( input('SPACE') && fuel > 0 ) thrust();
                else fall();
            }
       
            player_vx += player_ax;
          
            render("game_loop", [player_x, player_y, player_vx]);

            return game_loop;
	};
        var game_over = function(input, render){
            if (input("LMB")) return new_game();
            render('over_loop');
            return game_over;
        };
        return game_loop;
    };

var world = new_game();
    
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
        .on(C.X_KUP, function(e){
            input(codeToName(e.key), false);
        })
        .on(C.X_KDOWN, function(e){
            input(codeToName(e.key), true);
        })
        .on(C.X_MDOWN, function(e) {
            input('LMB', true);
        })
        .on(C.X_MUP,function(e) {
            input('LMB', false);
        })
        .modify(function(){
            world = world(input, render);
        });

    var player = createPlayer('canv', {'zoom':2.0,'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#597dce" }}});
    player.load(scene).play();
    
    /*
     * Smoothed image fix
     */

    document.getElementById('canv').getContext('2d').webkitImageSmoothingEnabled = false;
}
