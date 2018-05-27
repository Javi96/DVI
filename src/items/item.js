Quintus.Item = function(Q) {
    Q.Sprite.extend('Item', {
        init: function(p) {
            this._super(p, {
                asset: 'item_' + p.object + '.png'
            });
            this.add('animation, tween');
        },
        step: function(dt) {
            var get = function() {
                this.play('picked_item.mp3');
                this.destroy();
            };
            this.animate({ y: this.p.y - 10 }, 1, { callback: get });
        }
    });
};