Quintus.Dialog = function(Q) {
    Q.Sprite.extend('Dialog', {
        init: function(p) {
            this._super(p, {
                asset: 'dialog_box.png',
                type: Q.SPRITE_UI,
                x: Q.width / 2,
                y: Q.height - 100
            });
        }
    });
};