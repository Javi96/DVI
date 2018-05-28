Quintus.Heart = function(Q){
    Q.Sprite.extend('Heart', {
        init: function(p){
            this._super(p, {
                sheet: 'heart',
                sprite: 'heartAnim',
                gravity: 0,
                type: Q.SPRITE_UI,
                actualLives = 3
            })
            this.on('change.lives', this, 'lives');
        },

        lives: function(lives, maxLives){
            if(actualLives >  lives){
                this.play('getHit');
            }else if(actualLives <  lives){
                if(maxLives >= lives){
                    this.play('getHeart');
                }else{
                    Q.state.set('lives', maxLives);
                }
                Q.audio.play('heart.mp3');
            }
            actualLives = lives;
        }
    });

    Q.animations('heartAnim', {
        getHit:{ frames: [1, 2] },
        getHeart:{ frames: [2, 0] }
    })
}