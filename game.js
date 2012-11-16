function start() {


    var b = Builder._$, C = anm.C;
    var fhsv = Builder.fhsv;

    /*
     * Constants
     */
    var WIDTH = 640;
    var HEIGHT = 360;

    var G = 0.8;

    var level = b().band([0, Number.MAX_VALUE])
            .rect([0,200],[200,20])
            .reg([ -100, -10 ]);    

    var avatar = b().band([0,Number.MAX_VALUE])
            .rect([0,0],[20,20])
            .reg([ -10, -10 ]);

    var keyMap = {};
    keyMap[32] = false;
    keyMap[39] = false;
    keyMap[37] = false;

    function rect(x, y, w, h) {
        return [
                [x,y],
                [x+w,y],
                [x+w,y+h],
                [x, y+h]
            ];
    }

    function input(kc) {
        return keyMap[kc];
    }

    var world = (function () {
	var player_x = 0;
	var player_y = 0;
        var player_vy = 0;
        var player_vx = 0;
        var current_time = new Date().getTime();    
//	var map = [...];
        var new_world = function(){
            var time = new Date().getTime();
            var dt = time - current_time;
            current_time = time;
            player_vx = (input(39) ? 100 : 0) + (input(37) ? -100 : 0);
            player_vy += 9.8;	
            player_x += player_vx*(dt/1000);
            player_y += player_vy*(dt/1000);
            var coll_data = collide(rect(player_x, player_y, 20, 20), rect(0,200,200,20));
            if (coll_data) {
                //console.log(coll_data);
                player_vy = input(32) ? -300 : 0;
                player_y += coll_data.overlap;
            } else {
                //player_x = coll_data.contact.x;
            }
            //		...
            // Render
            avatar.v.xdata.pos[0] = player_x;
            avatar.v.xdata.pos[1] = player_y;
            return new_world;
	};
        return new_world(current_time);
    })();
    
    var scene = b().band([0,Number.MAX_VALUE])
            .add(level)
            .add(avatar)
            .on(C.X_KUP, function(e){
                keyMap[e.key] = false;
            })
            .on(C.X_KDOWN, function(e){
                keyMap[e.key] = true;
            })
            .modify(function(){
                world = world();
            });

    var player = createPlayer('canv', {'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#000" },'width':WIDTH, 'height':HEIGHT}});
    player.load(scene).play();
}
