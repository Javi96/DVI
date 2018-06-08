Quintus.Guard = function(Q) {

    Q.Sprite.extend('Guard', {
        init: function(p) {
            this._super(p, {
                sheet: 'guard',
                sprite: 'guardAnim',
                gravity: 0,
                dialog: ["Please help us!"
                ]
            });
            this.add('defaultNPC, animation, tween');
        },
        
        step: function(dt){
            this.play('stand');
        }

    });

    Q.animations('guardAnim', {
        'stand': { frames: [0] }
    });
};