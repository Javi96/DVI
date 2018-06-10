Quintus.GameOver = function(Q) {
	/*
     * Clase que define la pantalla de gameover.
     */
    Q.Sprite.extend('GameOver', {
        init: function(p) {
            this._super(p, {
                asset: 'end_game.png'
            });
        },
        step: function(dt) {}
    });
};