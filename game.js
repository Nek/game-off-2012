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
            .rect([0,0],[5200,100]);
    

    var avatar = b().band([0,Number.MAX_VALUE])
    .rect([0,0],[70,70]);

    //(input.toString() === 'false,true')

    var input = [false,false];

    var scene = b().band([0,Number.MAX_VALUE])
            .add(level)
            .add(avatar)
            .on(C.X_KUP, function(e){ 
                input.push(false);
                input.shift();
            })
            .modify(function(){
                level.v.collides(avatar.v, function(t,dt,sv,cv) {
                    console.log(arguments);
                   observations = cv;
                });
            })
            .on(C.X_KDOWN, function(e){
                // let's accumulate input
                input.push(e.key === 32);
                input.shift();
            })
            .modify(function(){loop(world, input, observations);});

    //var player = createPlayer('gameCanvas', {'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#000" },'width':WIDTH, 'height':HEIGHT}});
    //player.load(scene).play();

    var ctx = canv.getContext("2d");

    var keyMap = {};
    keyMap[32] = false;
    keyMap[39] = false;
    keyMap[37] = false;

    window.onkeydown = function(e) {
        console.log(e.keyCode);
        keyMap[e.keyCode] = true;
    };

    window.onkeyup = function(e) {
        keyMap[e.keyCode] = false;
    };

    function rect(x, y, w, h) {
        return [
                [x,y],
                [x+w,y],
                [x+w,y+h],
                [x, y+h]
            ];
    }

    function input2(kc) {
        //if (keyMap[kc] === undefined) return false;
        return keyMap[kc];
    }

    function create_world() {
	    var player_x = 0;
	    var player_y = 0;
        var player_vy = 0;
        var player_vx = 0;
        var current_time = new Date().getTime();    
//	var map = [...];
        var new_world = function(time){
            var dt = time - current_time;
            current_time = new Date().getTime();
            player_vx = (input2(39) ? 100 : 0) + (input2(37) ? -100 : 0);
            player_vy += 9.8;	
            player_x += player_vx*(dt/1000);
            player_y += player_vy*(dt/1000);
            var coll_data = collide(rect(player_x, player_y, 20, 20), rect(0,200,200,20));
            if (coll_data) {
                //console.log(coll_data);
                player_vy = input2(32) ? -300 : 0;
                player_y += coll_data.overlap;
            } else {
                //player_x = coll_data.contact.x;
            }
//		...
            render([[player_x, player_y,20,20],[0,200,200,20]]);
            webkitRequestAnimationFrame(new_world);
	    };

        new_world(current_time);
    }

    function render(objs) {
        ctx.clearRect(0,0,1000,1000);
        objs.forEach(function(obj) {
            ctx.fillRect.apply(ctx, obj);            
        });
    }
    
    create_world();
}
