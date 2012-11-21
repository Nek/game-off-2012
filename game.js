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

    var WIDTH = 640;
    var HEIGHT = 360;
    var G = 9.8;
    var PLATFORMS = [[0,200,200,30], [240,200,200,30], [140,140,200,30]];
    var HAZARDS = [[400,200-50,20,20]];

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
        for (i = 0; i < PLATFORMS.length; i++) {
            r = PLATFORMS[i];
            level.add(b().band([0, Number.MAX_VALUE])
                      .rect([r[0],r[1]],[r[2],r[3]])
                      .reg([-r[2]/2, -r[3]/2]));
        }
        
        for (i = 0; i < HAZARDS.length; i++) {
            r = HAZARDS[i];
            level.add(b().band([0, Number.MAX_VALUE])
                      .rect([r[0],r[1]],[r[2],r[3]])
                      .reg([-r[2]/2, -r[3]/2])
                      .fill('red'));
        }

        var avatar = b().band([0,Number.MAX_VALUE])
                .rect([0,0],[20,20])
                .reg([ -10, -10 ]);
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
                        game.v.xdata.pos[0] = 200 - params[0];
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
        var player_vx = 0;
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

        var platforms = PLATFORMS.map(function(el){return rect(el[0],el[1],el[2],el[3]);});
        var hazards = HAZARDS.map(function(el){return rect(el[0],el[1],el[2],el[3]);});

        var game_loop = function(input, render){
            var time = new Date().getTime();
            var dt = time - current_time;
            current_time = time;
            player_x += player_vx*(dt/1000);
            player_y += player_vy*(dt/1000);

            /*
             * Game over rule
             */
            
            var hazard_coll = multicollide(rect(player_x, player_y, 20, 20), hazards); 
            if (hazard_coll || player_y > 360 + 50) return game_over;
            
            // coll_data is false or {normal:{x,y}, overlap}
            var platf_coll = multicollide(rect(player_x, player_y, 20, 20), platforms);
            
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
            
            if (platf_coll && platf_coll.normal.y === 1 && yd === -1) y_coll = 'HEAD BUMP';
            if (platf_coll && platf_coll.normal.y === -1 && yd === 1) y_coll = 'LEG BUMP';
            

            switch(y_coll) {
            case "LEG BUMP":
                player_vy = input('SPACE') ? -300 : 0;
                player_x -= platf_coll.overlap * platf_coll.normal.x;
                player_y -= platf_coll.overlap * platf_coll.normal.y;
                break;
            default:
                player_vy += G;
                break;
            }
                
            player_vx = (input('LEFT') ? 100 : 0) + (input('RIGHT') ? -100 : 0);	
            // Render
            render("game_loop", [player_x, player_y]);

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
            case 39:
            return 'LEFT';
            case 37:
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

    var player = createPlayer('canv', {'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#000" },'width':WIDTH, 'height':HEIGHT}});
    player.load(scene).play();
}
