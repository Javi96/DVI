Quintus.Collider = function(Q) {
    /*
     * Clase que define los collider que permiten el cambio de mapas.
     */
    Q.Sprite.extend('Collider', {
        /*
         * Creación de los objetos collider (por defecto es una lámpara pero es invisible).   
         */
        init: function(p) {
            this._super(p, {
                asset: 'item_lamp.png',
                sensor: true,
                
                type: Q.SPRITE_COLLIDER
            });
            this.on('sensor', this, 'sensor');
        },
        /*
         * Sensor que carga el mapa cuando se ha chocado con un collider.  
         */
        sensor: function(col) {
            if (this.p.sensor) {
                Q.audio.stop();
                Q.clearStages();
                Q.stageScene('hud');
                Q.stageScene(this.p.to, { xLink: this.p.xLink, yLink: this.p.yLink });
                sensor = false;
            }
        }
    });
};