Quintus.Zelda = function(Q) {

    Q.Sprite.extend('Zelda', {
        init: function(p) {
            this._super(p, {
                sheet: 'zelda',
                sprite: 'zeldaAnim',
                gravity: 0,
                type: Q.SPRITE_NONE,
                continue: true,
                dialog: ["Thank you, Link!\nYou saved me!",
                    "Now Hyrule will\nlive in peace forever.",
                    "And that would be impossible\nwithout our developers:",
                    "Lidia Concepción\nJavier Cortés",
                    "Pedro D. González\nManuel Hidalgo",
                    "Thanks for playing!\n . . .",
                    "You may not understand it\nbut they are great people."
                ]
            });
            this.add('defaultNPC, animation, tween');
        },

        step: function(dt) {
            this.play('stand');
            
        }

    });

    //corregir en cambio de sheet
    Q.animations('zeldaAnim', {
        //'walking': { frames: [48, 49], rate: 1 / 8, next: 'stand' },
        'stand': { frames: [48] }
    });
};
