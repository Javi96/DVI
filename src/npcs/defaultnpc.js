Quintus.DefaultNPC = function(Q) {

    Q.Component('defaultNPC', {
        defaults: {
            type: Q.SPRITE_NPC,
            collisionMask: Q.SPRITE_PLAYER | Q.SPRITE_DEFAULT,
            gravity: 0
        },

        added: function() {
            var p = this.entity.p;

            Q._defaults(p, this.defaults);

            this.entity.add('2d, animation, tween');
            this.entity.on('step', this, 'step');
        }
    });

    Q.Sprite.extend('smallGirl', {

    });
};