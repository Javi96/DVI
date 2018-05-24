Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim',
                hp: 1
            });
            this.add('defaultEnemy');
        },
        step: function(dt) {
            if (!this.p.dead) {
                this.play('walk');
            }
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true }
    });
}