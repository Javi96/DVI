Quintus.Collider = function(Q) {
    Q.Sprite.extend('Collider', {
        init: function(p) {
            this._super(p, {});
        },
        step: function(dt) {}
    });
};