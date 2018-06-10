Quintus.RupeeCount = function(Q) {
    /**
     * Clase que representa el icono de contador de rupias
     */
    Q.Sprite.extend('RupeeCount', {
        init: function(p) {
            this._super(p, {
                asset: 'rupee_icon.png',
                gravity: 0,
                type: Q.SPRITE_UI,
                x: Q.width - 100,
                y: 20,
                scale: 2
            });
        }
    });

    /**
     * Contador de rupias como tal
     */
    Q.UI.Text.extend('Score', {
        init: function(p) {
            this._super(p, {
                label: 'x ' + Q.state.get('score'),
                x: Q.width - 50,
                y: 10,
                color: 'white',
                size: 18
            });

            Q.state.on('change.score', this, 'score');
        },

        /**
         * Si cambia el número de rupias, se activa
         */
        score: function(score) {
            Q.audio.play('rupee_counter.mp3');
            this.p.label = 'x ' + score;
        }
    });
};