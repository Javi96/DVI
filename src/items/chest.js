Quintus.Chest = function(Q) {
    Q.Sprite.extend('Chest', {
        init: function(p) {
            this._super(p, {
                sheet: 'chestSmall',
                sprite: 'chestAnim',
                type: Q.SPRITE_CHEST,
                sensor: true,
                open: false,
            });
            this.add('animation');
            this.on('sensor', this, 'sensor');
        },
        sensor: function() {
            if (this.p.sensor) {
                Q.audio.play('chest_open.mp3');
                this.p.open = true;
                this.p.sensor = false;
                var obj = this.stage.insert(new Q.Item({ object: this.p.object, x: this.p.x, y: this.p.y - 10 }));
            }
        },
        step: function(dt) {
            if (!this.p.open) {
                this.play('close');
            } else {
                this.play('open');
            }
        }
    });

    Q.animations('chestAnim', {
        close: { frames: [0] },
        open: { frames: [1] }
    });
};