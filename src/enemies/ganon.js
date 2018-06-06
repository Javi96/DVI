Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim',
                score: 100,
                hp: 3
            });
            this.add('defaultEnemy');
        },
        step: function(dt) {
            this.p.invicible -= dt;
            if (!this.p.dead) {
                this.play('walk');
            }
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true }
    });
};