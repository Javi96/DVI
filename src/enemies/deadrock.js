Quintus.Deadrock = function(Q) {

    Q.Sprite.extend('Deadrock', {
        init: function(p) {
            this._super(p, {
                sheet: 'deadrockWalk',
                sprite: 'deadrockAnim',
                hp: 1,
                vx: 50,
                direction: 'left',
                score: 5
            });
            this.add('defaultEnemy, 2d, aiBounce');
        },

        step: function(dt) {
            this.p.invicible -= dt;
            this.p.direction = (this.p.vx > 0) ? 'right' : 'left';

            this.play('walk_' + this.p.direction + '_foot');

            if (Q.state.get(this.p.id_enemy)) {
                this.destroy();
            }
        }
    });

    Q.animations('deadrockAnim', {
        walk_left_foot: { frames: [0, 1], rate: 1 / 10, loop: true },
        walk_right_foot: { frames: [0, 1], flip: 'x', rate: 1 / 10, loop: true }
    });
};