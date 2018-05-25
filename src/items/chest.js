Quintus.Chest = function(Q) {
    Q.Sprite.extend('Chest', {
        init: function(p) {
            this._super(p, {
                sheet: 'chestSmall',
                sprite: 'chestAnim',
                open: false,
                hp: 1
            });
            this.add('animation, tween');
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
}