Quintus.winGame = function(Q) {

    Q.Sprite.extend('winGame', {
        init: function(p) {
            this._super(p, {
                asset: 'win_game.png'
            });
        },
        step: function(dt) {}
    });
};