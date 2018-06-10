/**
 * Módulo donde se halla la implmentación de un cofre en el juego.
 * @param {*} Q Quintus
 */
Quintus.Stair = function(Q) {
    /**
     * Clase que representa un cofre.
     */
    Q.Sprite.extend('stair', {
        /**
         * Inicialización de la clase.
         */
        init: function(p) {
            /**
             * Se inicializa los valores de la clase.
             * Algunos de los cuales se pasan mediante Tiled.
             */
            this._super(p, {
                sheet: 'stairStand',
                sprite: 'stairAnim',
                gravity: 0,
                type: Q.SPRITE_WALL
            });
            this.add(' animation, tween');

            /**
             * Módulos necesarios para la correcta funcionalidad de la clase.
             */
        },
        step: function(dt) {
            this.play('stand');
        }
    });
    
     Q.animations('stairAnim', {
        stand: { frames: [0], loop: true }
    });

};