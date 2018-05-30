Quintus.Rupee = function(Q) {
    Q.Sprite.extend('Rupee', {
        init: function(p) {
            this._super(p, {
                sheet: 'rupee',
                sprite: 'rupeeAnim',
                type: Q.SPRITE_RUPEE,
                sensor: true,
                open: false,
            });
            this.add('animation');
            this.on('sensor', this, 'sensor');
            this.play('live');
        },
        sensor: function() {
            Q.state.inc('score', 1);
            this.destroy();
        },
        step: function(dt) {}
    });

    Q.animations('rupeeAnim', {
        live: { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], rate: 1 / 12, loop: true },
    });
};