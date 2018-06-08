Quintus.Uncle = function(Q) {

    Q.Sprite.extend('Uncle', {
        init: function(p) {
            this._super(p, {
                x: 20,
                y: 20,
                sheet: 'uncle',
                sprite: 'uncleAnim',
                gravity: 0,
                dead: false,
                dialog: ["Link, you must save the princess.",
                    "*cof cof* I can't move anymore"
                ],
                specDialog: "I feel so tired..."
            });
            this.add('defaultNPC, 2d, animation, tween');
        },

        sensor: function() {
            if (this.p.sensor) {
                if (!this.p.dead) {
                    this.talk();
                } else {
                    Q.state.set('dialog', this.p.specDialog);
                    Q.stageScene('dialog');
                    //Q.clearStage(2);
                }
            }
        }

    });

    Q.animations('uncleAnim', {
        'stand': { frames: [35] }
    });
};