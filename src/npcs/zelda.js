Quintus.Zelda = function(Q) {

    Q.Sprite.extend('Zelda', {
        init: function(p) {
            this._super(p, {
                sheet: 'npcs',
                sprite: 'zeldaAnim',
                gravity: 0,
                type: Q.SPRITE_NONE,
                dialog: ["Thank you, Link! You saved me!",
                    "Now Hyrule will live in peace forever."
                ]
            });
            this.add('defaultNPC, animation, tween');
        },
        step: function(dt) {
            if (Q.state.get('end')) {
                this.play('walking');
                this.animate({ y: p.y + 100 }, 3, { delay: 2 });
                this.play('stand');
                this.talk();
            }
        }


    });

    Q.animations('zeldaAnim', {
        'walking': { frames: [48, 49], rate: 1 / 8, next: 'stand' },
        'stand': { frames: [48] }
    });
};