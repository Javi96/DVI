Quintus.Uncle = function(Q) {

    Q.Sprite.extend('Uncle', {
        init: function(p) {
            this._super(p, {
                sheet: 'uncle',
                sprite: 'uncleAnim',
                gravity: 0,
                dead: false,
                dialog: ["Link, you must save the princess.",
                    "*cof cof* I can't move anymore"
                ],
                specDialog: "I feel so tired..."
            });
            this.add('defaultNPC, animation, tween');
            this.on('talk', this, 'talk');
        },

        step: function(dt){
            this.play('stand');
        },

        talk: function() {
            if (!this.p.dead) {
                for (let i in this.p.dialog) {
                    Q.state.set('dialog', this.p.dialog[i]);
                    Q.stageScene('talking');
                }
                this.p.dead = true;
            } else {
                Q.state.set('dialog', this.p.specDialog);
                Q.stageScene('talking');
            }
            //Q.clearStage(2);           
        }

    });

    Q.animations('uncleAnim', {
        'stand': { frames: [0] }
    });
};