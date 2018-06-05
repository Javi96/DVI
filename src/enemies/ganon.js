Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim',
                type: Q.SPRITE_ENEMY,
                hp: 3
            });
            this.add('defaultEnemy');
            this.on('dead', this, 'dead');
        },
        step: function(dt) {
            this.p.invicible -= dt;
            if (!this.p.dead) {
                this.play('walk');
            }
        },
        dead: function() {
            var obj = this.stage.insert(new Q.EnemyKilled({ x: this.p.x, y: this.p.y }));
            Q.state.inc('score', 100);
            Q.state.set(this.p.id_enemy, true);
            this.destroy();
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true }
    });
};