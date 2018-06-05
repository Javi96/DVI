Quintus.Soldier = function(Q) {

    Q.Sprite.extend('Soldier', {
        init: function(p) {
            this._super(p, {
                sheet: 'soldierWalk',
                sprite: 'soldierAnim',
                type: Q.SPRITE_ENEMY,
                hp: 2,
                vx: 50,
                direction: 'left',
            });
            this.add('defaultEnemy, 2d, aiBounce');
            this.on('dead', this, 'dead');
        },
        step: function(dt) {
            this.p.invicible -= dt;
            this.p.direction = (this.p.vx > 0) ? 'right' : 'left';

            this.play('walk_' + this.p.direction + '_foot');

            if (Q.state.get(this.p.id_enemy)) {
                this.destroy();
            }
        },
        dead: function() {
            var obj = this.stage.insert(new Q.EnemyKilled({ x: this.p.x, y: this.p.y }));
            Q.state.inc('score', 5);
            Q.state.set(this.p.id_enemy, true);
            this.destroy();
        }
    });

    Q.animations('soldierAnim', {
        walk_left_foot: { frames: [0, 1], rate: 1 / 10, loop: true },
        walk_right_foot: { frames: [0, 1], flip: 'x', rate: 1 / 10, loop: true }
    });
};