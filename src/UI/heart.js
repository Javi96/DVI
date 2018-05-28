Quintus.Heart = function(Q){
    Q.Sprite.extend('Heart', {
        init: function(p){
            this._super(p, {
                sheet: 'heart',
                sprite: 'heartAnim',
                gravity: 0,
                x: 20,
                y: 20,
                scale: 2,
                type: Q.SPRITE_UI,
                actualLives: 3
            })
            this.add('animation');

            Q.state.on('change.lives', this, 'lives');
        },

        lives: function(lives){
            if(this.p.actualLives >  lives && this.p.frame != 2){
                this.play('getHit');
            }else if(this.p.actualLives <  lives && this.p.frame != 0){
                if(maxLives >= lives){
                    this.play('getHeart');
                }else{
                    Q.state.set('lives', maxLives);
                }
                Q.audio.play('heart.mp3');
            }
            this.p.actualLives = lives;
            //this.p.frame= 1;
        }
    });

    Q.animations('heartAnim', {
        'getHit':{ frames: [1, 2], rate: 1 / 4, loop: false },
        'getHeart':{ frames: [1, 0], rate: 1 / 8, loop: false }
    });
}