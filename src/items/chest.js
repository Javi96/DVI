/**
 * Módulo donde se halla la implmentación de un cofre en el juego.
 * @param {*} Q Quintus
 */
Quintus.Chest = function(Q) {
    /**
     * Clase que representa un cofre.
     */
    Q.Sprite.extend('Chest', {
        /**
         * Inicialización de la clase.
         */
        init: function(p) {
            /**
             * Se inicializa los valores de la clase.
             * Algunos de los cuales se pasan mediante Tiled.
             */
            this._super(p, {
                sheet: 'chestSmall',
                sprite: 'chestAnim',
                type: Q.SPRITE_CHEST,
                sensor: true
            });
            /**
             * Módulos necesarios para la correcta funcionalidad de la clase.
             */
            this.add('animation');

            this.on('sensor', this, 'sensor');
        },
        sensor: function() {
            /**
             * Si ya estaba cerrado entonces genera un objeto determinado por el Tiled.
             */
            if (this.p.sensor) {
                Q.audio.play('chest_open.mp3');
                Q.state.set(this.p.id_chest, true);
                this.p.sensor = false;
                var obj = this.stage.insert(new Q.Item({ object: this.p.object, x: this.p.x, y: this.p.y - 10 }));
            }
        },
        /**
         * Un paso de la clase.
         */
        step: function(dt) {
            if (Q.state.get(this.p.id_chest)) {
                this.play('open');
            } else {
                this.play('close');
            }
        }
    });
    /**
     * Animaciones de la clase.
     */
    Q.animations('chestAnim', {
        close: { frames: [0] },
        open: { frames: [1] }
    });
};