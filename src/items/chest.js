Quintus.Chest = function(Q) {
    Q.Sprite.extend('Chest', {
        init: function(p) {
            this._super(p, {
                sheet: 'chestSmall',
                sprite: 'chestAnim',
                sensor: true,
                open: false,
                object: 'lamp',
            });
            this.add('animation');
            this.on('sensor', this, 'sensor');
        },
        sensor: function() {
            Q.audio.play('chest_open.mp3');
            this.p.open = true;
            this.p.sensor = false;
            var obj = this.stage.insert(new Q.Lamp({ x: this.p.x - 50, y: this.p.y }));
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