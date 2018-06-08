Quintus.Soldier = function(Q) {

    Q.Sprite.extend('Soldier', {
        init: function(p) {
            this._super(p, {
                sheet: 'soldierWalk',
                sprite: 'soldierAnim',
                hp: 2,
                viewRange: 10,
                direction: 'down',
                vSoldier: 40,
                tileSize: 8,
                score: 10,
                collisionMask: Q.SPRITE_DEFAULT,
                type: Q.SPRITE_ENEMY,
            });
            this.add('defaultEnemy, 2d');
            this.on('check', this, 'check');
            this.on('move', this, 'move');
            this.on('moveX', this, 'moveX');
            this.on('moveY', this, 'moveY');
        },
        step: function(dt) {
            this.p.invicible -= dt;

            if (Q.state.get(this.p.id_enemy)) {
                this.destroy();
            }
            this.check();
        },

        check: function() {
            this.p.vx = 0;
            this.p.vy = 0;

            if (!this.p.trackClass) {
                this.p.trackClass = Q('Link').first();
            }

            var distanceX = Math.pow((this.p.x - this.p.trackClass.p.x), 2);
            var distanceY = Math.pow((this.p.y - this.p.trackClass.p.y), 2);
            var distance = Math.sqrt(distanceX + distanceY) / this.p.tileSize;

            if (distance <= this.p.viewRange) {
                this.move();
            } else {
                this.play('stand_' + this.p.direction);
            }
        },
        move: function() {
            var objective = this.p.trackClass.p;
            var dir = this.p.direction;
            this.moveX(this.p.x, objective.x);
            this.moveY(this.p.y, objective.y);
            if (this.p.vx != 0 || this.p.vy != 0) {
                if (Math.abs(this.p.vx) >= Math.abs(this.p.vy)) {
                    if (this.p.vx < 0) {
                        this.p.direction = 'left';
                    } else if (this.p.vx > 0) {
                        this.p.direction = 'right';
                    }
                    if (dir == 'up') {
                        this.play('walking_up_' + this.p.direction);
                    } else if (dir == 'down') {
                        this.play('walking_down_' + this.p.direction);
                    } else {
                        this.play('walking_' + this.p.direction);
                    }
                } else {
                    if (this.p.vy < 0) {
                        this.p.direction = 'up';
                    } else if (this.p.vy > 0) {
                        this.p.direction = 'down';
                    }
                    if (dir == 'left') {
                        this.play('walking_left_' + this.p.direction);
                    } else if (dir == 'right') {
                        this.play('walking_right_' + this.p.direction);
                    } else {
                        this.play('walking_' + this.p.direction);
                    }
                }
            }
        },

        moveX: function(xSoldier, xObjective) {
            if (xSoldier < xObjective) {
                this.p.vx = this.p.vSoldier;
                if (xSoldier + this.p.vx > xObjective) {
                    this.p.vx = xObjective - xSoldier;
                }
            } else if (xSoldier > xObjective) {
                this.p.vx = -this.p.vSoldier;
                if (xSoldier + this.p.vx < xObjective) {
                    this.p.vx = xObjective - xSoldier;
                }
            } else {
                this.p.vx = 0;
            }
        },

        moveY: function(ySoldier, yObjective) {
            if (ySoldier < yObjective) {
                this.p.vy = this.p.vSoldier;
                if (ySoldier + this.p.vy > yObjective) {
                    this.p.vy = yObjective - ySoldier;
                }
            } else if (ySoldier > yObjective) {
                this.p.vy = -this.p.vSoldier;
                if (ySoldier + this.p.vy < yObjective) {
                    this.p.vy = yObjective - ySoldier;
                }
            } else {
                this.p.vy = 0;
            }
        }
    });

    Q.animations('soldierAnim', {
        'walking_down': { frames: [0, 1], rate: 1 / 10, loop: true },
        'stand_down': { frames: [0] },
        'walking_down_right': { frames: [2], rate: 1 / 12, next: 'walking_right' },
        'walking_down_left': { frames: [3], rate: 1 / 12, next: 'walking_left' },

        'walking_up': { frames: [12, 13], rate: 1 / 10, loop: true },
        'stand_up': { frames: [12] },
        'walking_up_right': { frames: [15], rate: 1 / 12, next: 'walking_right' },
        'walking_up_left': { frames: [14], rate: 1 / 12, next: 'walking_left' },

        'walking_right': { frames: [4, 5], rate: 1 / 10, loop: true },
        'stand_right': { frames: [4] },
        'walking_right_up': { frames: [6], rate: 1 / 12, next: 'walking_up' },
        'walking_right_down': { frames: [7], rate: 1 / 12, next: 'walking_down' },

        'walking_left': { frames: [8, 9], rate: 1 / 10, loop: true },
        'stand_left': { frames: [9] },
        'walking_left_up': { frames: [11], rate: 1 / 12, next: 'walking_up' },
        'walking_left_down': { frames: [10], rate: 1 / 12, next: 'walking_down' }
    });
};