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
        var keyMap = {};
        keyMap[32] = false;
        keyMap[39] = false;
        keyMap[37] = false;
        return function(kc, val) {
            if (val !== undefined) keyMap[kc] = val;
            return keyMap[kc];
        };
    })();

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
        var level = b().band([0, Number.MAX_VALUE])
                .rect([0,200],[200,20])
                .reg([ -100, -10 ]);

        var avatar = b().band([0,Number.MAX_VALUE])
                .rect([0,0],[20,20])
                .reg([ -10, -10 ]);
        scene
            .add(level)
            .add(avatar);

        return function(x,y){
            avatar.v.xdata.pos[0] = x;
            avatar.v.xdata.pos[1] = y;
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
    var world = (function () {
        var G = 9.8;

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
    
        return function(input, render){
            var time = new Date().getTime();
            var dt = time - current_time;
            current_time = time;
            player_vx = (input(39) ? 100 : 0) + (input(37) ? -100 : 0);
            player_vy += G;	
            player_x += player_vx*(dt/1000);
            player_y += player_vy*(dt/1000);
            var coll_data = collide(rect(player_x, player_y, 20, 20), rect(0,200,200,20));
            // Use collision data and input to decide what happens next.
            if (coll_data) {
                player_vy = input(32) ? -300 : 0;
                player_y += coll_data.overlap;
            } else {
            }
            // Render
            render(player_x, player_y);
	};
    })();
    
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
    scene
        .on(C.X_KUP, function(e){
            input(e.key, false);
        })
        .on(C.X_KDOWN, function(e){
            input(e.key, true);
        })
        .modify(function(){
            world(input, render);
        });

    var player = createPlayer('canv', {'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#000" },'width':640, 'height':360}});
    player.load(scene).play();
}
