Quintus.Uncle = function(Q) {

    Q.Sprite.extend('Uncle', {
        init: function(p) {
            this._super(p, {
                sheet: 'uncle',
                sprite: 'uncleAnim',
                gravity: 0,
                dead: false,
                continue: true,
                dialog: ["Link, you must\nsave the princess.",
                    "*cof cof*\nI can't move anymore.",
                    "I feel so tired..."
                ]
            });
            this.add('defaultNPC, animation');
        },

        step: function(dt){
            this.play('stand');
        },

    });

    Q.animations('uncleAnim', {
        'stand': { frames: [0] }
    });
};
