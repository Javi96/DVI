Quintus.Zelda = function(Q) {
    /**
     * Princesa Zelda.
     */
    Q.Sprite.extend('Zelda', {
        init: function(p) {
            this._super(p, {
                sheet: 'zelda',
                sprite: 'zeldaAnim',
                gravity: 0,
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
            this.add('defaultNPC');
            this.on('endTalk', this, 'endTalk');
        },

        step: function(dt) {
            this.play('stand');
        },
        /**
         * Se gana la partida
         */
        endTalk: function(obj) {
            obj.p.talking = false;
            Q.clearStage(1);
            Q.clearStage(2);
            Q.stageScene('wingame');
        }
    });

    Q.animations('zeldaAnim', {
        'stand': { frames: [0] }
    });
};