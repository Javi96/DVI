Quintus.winGame = function(Q) {
	/*
     * Clase que define la pantalla de victoria.
     */
    Q.Sprite.extend('winGame', {
        init: function(p) {
            this._super(p, {
                asset: 'win_game.png'
            });
        },
        step: function(dt) {}
    });
};