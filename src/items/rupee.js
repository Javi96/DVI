Quintus.Rupee = function(Q) {
    Q.Sprite.extend('Rupee', {
        init: function(p) {
            this._super(p, {
                sheet: 'rupee',
                sprite: 'rupeeAnim',
                type: Q.SPRITE_RUPEE,
                sensor: true,
                get: false
            });
            this.add('animation');
            this.on('sensor', this, 'sensor');

            this.play('live');
        },
        sensor: function() {
            this.destroy();
            Q.state.inc('score', 1);
            Q.state.set(this.p.id_rupee, true);
            
        },
        step: function(dt) {
            if (Q.state.get(this.p.id_rupee)) {
                this.destroy();
            }
        }
    });

    Q.animations('rupeeAnim', {
        live: { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], rate: 1 / 12, loop: true },
    });
};