Quintus.Dialog = function(Q) {
    /**
     * Clase que representa la ventana de diálogo.
     */
    Q.Sprite.extend('Dialog', {
        init: function(p) {
            this._super(p, {
                asset: 'dialog_box.png',
                type: Q.SPRITE_UI,
                x: Q.width / 2,
                y: Q.height - 80
            });
        }
    });
};