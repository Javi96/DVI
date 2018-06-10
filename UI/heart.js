Quintus.Heart = function(Q) {
    /**
     * Clase que representa las vidas que tiene Link.
     * Se representan por corazones, cada uno con un num.
     */
    Q.Sprite.extend('Heart', {
        init: function(p) {
            this._super(p, {
                sheet: 'heart',
                sprite: 'heartAnim',
                gravity: 0,
                x: 20,
                y: 20,
                scale: 2,
                type: Q.SPRITE_UI,
                actualLives: 3
            });
            this.add('animation');

            Q.state.on('change.lives', this, 'lives');
        },

        /**
         * Si cambia el número de vidas, se anima el último corazón.
         */
        lives: function(lives) {
            if (this.p.actualLives > lives) {
                if (this.p.num === lives) {
                    this.play('getHit');
                }
            }
            this.p.actualLives = lives;
        }
    });

    Q.animations('heartAnim', {
        'getHit': { frames: [1, 2], rate: 1 / 4, loop: false },
    });
};