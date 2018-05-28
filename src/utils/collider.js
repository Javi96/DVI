Quintus.Collider = function(Q) {
    Q.Sprite.extend('Collider', {
        init: function(p) {
            this._super(p, {
                asset: 'item_lamp.png',
                sensor: true,
                type: Q.SPRITE_COLLIDER
            });
            this.on('sensor', this, 'sensor');
        },

        sensor: function(col) {
            if (this.p.sensor) {
                //animacion pantalla negra
                Q.audio.stop();
                Q.clearStages();
                Q.stageScene('hud');
                Q.stageScene(this.p.to, { xLink: this.p.xLink, yLink: this.p.yLink });
                sensor = false;
            }
        }
    });
};