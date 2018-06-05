Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim',
                hp: 3,
                type: Q.SPRITE_ENEMY
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
            console.log("Oh no, maldito seas scooby dooooooo");
            console.log("uy fallo de juego");
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true }
    });
};