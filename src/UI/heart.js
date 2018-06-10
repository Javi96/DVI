Quintus.Heart = function(Q) {
    Q.Sprite.extend('Heart', {
        init: function(p) {
            this._super(p, {
                sheet: 'heart',
                sprite: 'heartAnim',
                gravity: 0,
                x: 20,
                y: 20,
                scale: 2,
                type: Q.SPRITE_UI,
                actualLives: 3
            });
            this.add('animation');

            Q.state.on('change.lives', this, 'lives');
        },

        lives: function(lives) {
            console.log('he entrado', lives);
            //if (this.p.num === lives) {
                console.log('corazon ', this.p.num);
                if (this.p.actualLives > lives) {
                    if (this.p.num === lives) {
                        this.play('getHit');
                    }
                } else if (this.p.actualLives < lives) {
                    console.log('he entrado otra vez');
                    if (Q.state.get('maxLives') >= lives) {
                        this.play('getHeart');
                    } else {
                        Q.state.set('lives', Q.state.get('maxLives'));
                    }
                    Q.audio.play('heart.mp3');
                }
                this.p.actualLives = lives;
            //}
        }
    });

    Q.animations('heartAnim', {
        'getHit': { frames: [1, 2], rate: 1 / 4, loop: false },
        'getHeart': { frames: [1, 0], rate: 1 / 8, loop: false }
    });
};