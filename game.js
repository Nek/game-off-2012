function start() {

    anm.M.collisions.pathDriven = true;
    var b = Builder._$, C = anm.C;

    var fhsv = Builder.fhsv;

    // from underscore.js
    var once = function(func) {
        var ran = false;
        var memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            return memo;
        };
    };

    var countFrames = function () {
        if (this.currentFrame === undefined) this.currentFrame = 0;
        else this.currentFrame += 1;
    };

    var doIfThis = function (cond, l) {
        return function (t, d) {
            if (cond.call(this)) {
                return l.call(this, t, d);
            }
        };
    };

    var doIf = function (cond, l) {
        return function (t, d) {
            if (cond()) {
                return l.call(this, t, d);
            }
        };
    };

    var currentFrameEq = function (i) {
        return function () {
            return this.currentFrame === i;
        };
    };

    var currentFrameGt = function (i) {
        return function () {
            return this.currentFrame > i;
        };
    };

    var currentFrameLt = function (i) {
        return function () {
            return this.currentFrame < i;
        };
    };

    var onFrame = function (i, l) {
        return doIfThis(currentFrameEq(i), l);
    };

    var afterFrame = function (i, l) {
        return doIfThis(currentFrameGt(i), l);
    };

/*
 * state:
 * world = menu | game_play | game_pause | game_over | scores_table
 * game_play = player, scores
 * game_pause = player, scores
 * game_over = scores
 * scores_table = [scores]
 * menu = selected_item
 * player = speed, position, run | jump
 * 
 * 
 * loop:
 * 
 * 
 */

    /*
     * Constants
     */
    var WIDTH = 640;
    var HEIGHT = 360;

    var G = 0.8;

    var world = {
        speed : 3,
        jump: 0,
        py : 0,
        px : 100,
        on_earth : false
    };

    var level = b().band([0, Number.MAX_VALUE])
            .rect([0,0],[5200,100]);
    

    var avatar = b().band([0,Number.MAX_VALUE])
    .rect([0,0],[70,70]);

    function render(w) {
        avatar.v.xdata.pos[0] = w.speed*10;
        avatar.v.xdata.pos[1] = w.py;
        level.v.xdata.pos[0] = -w.px;
        level.v.xdata.pos[1] = HEIGHT;
    }
    
    function update(w, input) {
        if (!level.v.intersects(avatar.v)) {
            w.jump += G;
        } else if (input.toString() === 'false,true') w.jump = -15; else w.jump = 0; 

        w.py += w.jump;
        w.px += w.speed;
        w.speed += 0.1;
       
    }

    function loop(w, input) {
        update(w, input); 
        render(w);
    }

    var input = [false,false];

    var scene = b().band([0,Number.MAX_VALUE])
            .add(level)
            .add(avatar)
            .on(C.X_KUP, function(e){
                input.push(false);
                input.shift();
            })
            .on(C.X_KDOWN, function(e){
                input.push(e.key === 32);
                input.shift();
            })
            .modify(function(){loop(world, input);});

    var player = createPlayer('gameCanvas', {'mode':C.M_DYNAMIC, 'anim':{"bgfill": { color: "#000" },'width':WIDTH, 'height':HEIGHT}});
    player.load(scene).play();
}
