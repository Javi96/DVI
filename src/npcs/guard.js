Quintus.Guard = function(Q) {
    /**
     * Guardia del reino de Hyrule.
     */
    Q.Sprite.extend('Guard', {
        init: function(p) {
            this._super(p, {
                sheet: 'alttp',
                sprite: 'guardAnim',
                gravity: 0,
                dialog: ["Please help us!"]
            });
            this.add('defaultNPC');
        },

        step: function(dt) {
            this.play('stand');
        }
    });

    Q.animations('guardAnim', {
        'stand': { frames: [210] }
    });
};