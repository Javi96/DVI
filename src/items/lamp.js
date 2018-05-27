Quintus.Lamp = function(Q) {
    Q.Sprite.extend('Lamp', {
        init: function(p) {
            this._super(p, {
                asset: 'item_lamp'
            });
            this.add('tween');
        },
        step: function(dt) {}
    });
};