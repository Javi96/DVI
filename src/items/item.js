Quintus.Item = function(Q) {
    /**
     * Clase que representa un objeto
     */
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
                Q.state.inc('score', 20);
                if (Q.state.get(this.p.object)) {
                    Q.state.inc(this.p.object, 1);
                } else {
                    Q.state.set(this.p.object, 1);
                }
                this.destroy();
            };
            this.animate({ y: this.p.y - 10 }, 1, { callback: get });
        }
    });
};