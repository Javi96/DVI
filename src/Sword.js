function loadSword(Q) {
    Q.Sprite.extend('Sword', {
        init: function(p) {
            this._super(p, {
                sheet: 'sword',
                sprite: 'swordAnim',
                gravity: 0,
                type: Q.SPRITE_SWORD,
                stepDistance: 8, // should be tile size
                stepDelay: 0.1, // seconds to delay before next step
            });
            this.add('animation');
            //this.on("enemy.hit","enemyHit");
        },
        step: function(dt) {
            dir = "sword";
            if(Q.inputs['up'])
                dir += "_up";
            else if(Q.inputs['down'])
                dir += "_down";

            if(Q.inputs['left'])
                dir += "_left";
            else if(Q.inputs['right'])
                dir += "_right";

             if(dir !== "sword"){
                this.play(dir);
            }
        }


    });



    Q.animations('swordAnim', {
        'sword_right': { frames: [0, 1, 2, 3, 4, 5], rate: 1 / 16},
        'sword_up': { frames: [6, 7, 8, 9, 10, 11], rate: 1/16},
        'sword_left': { frames: [12, 13, 14, 15, 16, 17], rate: 1 / 16},
        'sword_down': { frames: [18, 19, 20, 21, 22, 23], rate: 1/16},
        'sword_up_right': { frames: [0, 1, 2, 3, 4, 5], rate: 1 / 12},
        'sword_up_left': { frames: [6, 7, 8, 9, 10, 11], rate: 1 / 12},
        'sword_down_right': { frames: [0, 1, 2, 3, 4, 5], rate: 1 / 12},
        'sword_down_left': { frames: [18, 19, 20, 21, 22, 23], rate: 1 / 12},

    });


}