
Quintus.Stair = function(Q) {
    /**
     * Clase del muro que crea Ganon,
     * e impide llegar a Link hasta Zelda 
     */
    Q.Sprite.extend('stair', {
        init: function(p) {
            this._super(p, {
                sheet: 'stairStand',
                sprite: 'stairAnim',
                gravity: 0,
                type: Q.SPRITE_WALL
            });
            this.add(' animation, tween');
        },

        step: function(dt) {
            this.play('stand');
        }
    });
    
    Q.animations('stairAnim', {
        stand: { frames: [0], loop: true }
    });

};