Quintus.GameOver = function(Q) {

    Q.Sprite.extend('GameOver', {
        init: function(p) {
            this._super(p, {
                asset: 'end_game.png'
            });
        },
        step: function(dt) {}
    });
};