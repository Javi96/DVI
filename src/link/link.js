Quintus.Link = function(Q) {

    Q.Sprite.extend('Link', {
        init: function(p) {
            this._super(p, {
                sheet: 'link',
                sprite: 'linkAnim',
                gravity: 0,
                stepDistance: 16, // should be tile size
                stepDelay: 0.2, // seconds to delay before next step
                points: [
                    [-8, -3],
                    [8, -3],
                    [8, 12],
                    [-8, 12]
                ],

                type: Q.SPRITE_PLAYER,
                collisionMask: Q.SPRITE_DEFAULT | Q.SPRITE_ENEMY,
            });
            this.add('stepControls, animation');
        },
        step: function(dt) {
            this.p.reloadSword -= dt;
            var dir = 'walking';
            
                if (Q.inputs['up']) {
                    dir += '_up';
                } else if (Q.inputs['down']) {
                    dir += '_down';
                }
                if (Q.inputs['left']) {
                    dir += '_left';
                } else if (Q.inputs['right']) {
                    dir += '_right';
                }
                if (dir !== 'walking') {
                    this.play(dir);
                }
            
            this.stage.collide(this);
        }
    });

    Q.animations('linkAnim', {
        'walking_right': { frames: [0, 1, 2, 3, 4, 5, 6, 7], rate: 1 / 16, next: 'stand_right' },
        'stand_right': { frames: [0] },

        'walking_up': { frames: [11, 12, 13, 14, 15, 16, 17, 18], rate: 1 / 16, next: 'stand_up' },
        'walking_up_right': { frames: [8, 9, 10], rate: 1 / 12, next: 'stand_up_right' },
        'walking_up_left': { frames: [19, 20, 21], rate: 1 / 12, next: 'stand_up_left' },
        'stand_up': { frames: [11] },
        'stand_up_right': { frames: [8] },
        'stand_up_left': { frames: [19] },

        'walking_down': { frames: [33, 34, 35, 36, 37, 38, 39, 40], rate: 1 / 16, next: 'stand_down' },
        'walking_down_right': { frames: [41, 42, 43], rate: 1 / 12, next: 'stand_down_right' },
        'walking_down_left': { frames: [30, 31, 32], rate: 1 / 12, next: 'stand_down_left' },
        'stand_down': { frames: [33] },
        'stand_down_right': { frames: [41] },
        'stand_down_left': { frames: [30] },

        'walking_left': { frames: [22, 23, 24, 25, 26, 27, 28, 29], rate: 1 / 16, next: 'stand_left' },
        'stand_left': { frames: [22] }
    });
};