Quintus.DefaultNPC = function(Q) {

    Q.Component('defaultNPC', {
        defaults: {
            collisionMask: Q.SPRITE_PLAYER | Q.SPRITE_DEFAULT,
            gravity: 0
        },

        added: function() {
            var p = this.entity.p;
            this.p.type = Q.SPRITE_NPC;
            Q._defaults(p, this.defaults);

            this.entity.add('2d, animation, tween');
            this.entity.on('sensor', this, 'sensor');
        },

        sensor: function() {
            if (this.p.sensor) {
                this.entity.play('stand');
                this.entity.talk();
            }
        },

        talk: function() {
            for (var i in this.entity.p.dialog) {
                Q.state.set('dialog', i);
                Q.stageScene('dialog');

            }
            //Q.clearStage(2);
        }
    });
};