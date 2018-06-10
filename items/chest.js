Quintus.Chest = function(Q) {
    /**
     * Clase que representa un cofre.
     */
    Q.Sprite.extend('Chest', {
        init: function(p) {
            this._super(p, {
                sheet: 'chestSmall',
                sprite: 'chestAnim',
                type: Q.SPRITE_CHEST,
                sensor: true
            });
            this.add('animation');

            this.on('sensor', this, 'sensor');
        },
        
        /**
         * Si el cofre está cerrado (sensor: true), crea un objeto.
         */
        sensor: function() {
            if (this.p.sensor) {
                Q.audio.play('chest_open.mp3');
                Q.state.set(this.p.id_chest, true);
                this.p.sensor = false;
                var obj = this.stage.insert(new Q.Item({ object: this.p.object, x: this.p.x, y: this.p.y - 10 }));
            }
        },
        
        step: function(dt) {
            if (Q.state.get(this.p.id_chest)) {
                this.play('open');
            } else {
                this.play('close');
            }
        }
    });

    Q.animations('chestAnim', {
        close: { frames: [0] },
        open: { frames: [1] }
    });
};