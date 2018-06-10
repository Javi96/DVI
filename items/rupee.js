Quintus.Rupee = function(Q) {
    /**
     * Clase que representa las rupias 
     * que se pueden recoger por el mapa.
     */
    Q.Sprite.extend('Rupee', {
        init: function(p) {
            this._super(p, {
                sheet: 'rupee',
                sprite: 'rupeeAnim',
                type: Q.SPRITE_RUPEE,
                collisionMask: Q.SPRITE_DEFAULT,
                sensor: true,
                get: false
            });
            this.add('animation');
            this.on('sensor', this, 'sensor');
            this.play('live');
        },

        /**
         * Se recogen y se marcan las rupias 
         * para que no vuelvan a aparecer al cambiar de mapa
         */
        sensor: function() {
            this.destroy();
            Q.state.inc('score', 1);
            Q.state.set(this.p.id_rupee, true);
            
        },

        step: function(dt) {
            if (Q.state.get(this.p.id_rupee)) {
                this.destroy();
            }
        }
    });

    Q.animations('rupeeAnim', {
        live: { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], rate: 1 / 12, loop: true },
    });
};