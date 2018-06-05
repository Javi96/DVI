Quintus.EnemyKilled = function(Q) {
    Q.Sprite.extend('EnemyKilled', {
        init: function(p) {
            this._super(p, {
                sheet: 'enemyKilled',
                sprite: 'enemyKilledAnim',
            });
            this.add('animation');
            this.on('end', this, 'end');
            this.play('play');
        },
        step: function(dt) {},

        end: function() {
            this.destroy();
        }
    });

    Q.animations('enemyKilledAnim', {
        play: { frames: [0, 1, 2, 3, 4, 5], rate: 1 / 10, loop: false, trigger: 'end' },
    });
};