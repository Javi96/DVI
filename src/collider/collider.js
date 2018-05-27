Quintus.Collider = function(Q) {
    Q.Sprite.extend('Collider', {
        init: function(p) {
            this._super(p, {
                asset: 'item_lamp.png',
                sensor: true,               
            });
            this.on('sensor', this, 'sensor');
        },

        sensor: function(col){
            //animacion pantalla negra
            Q.stageScene(this.p.to, {xLink: this.p.xLink, yLink: this.p.yLink});
        }
    });
};