Quintus.DefaultNPC = function(Q) {
    Q.component('defaultNPC', {
        defaults: {
            gravity: 0,
            sensor: true
        },

        added: function() {
            this.entity.p.type = Q.SPRITE_NPC;
            Q._defaults(this.entity.p, this.defaults);

            this.entity.add('animation, tween');
            this.entity.on('sensor', this, 'sensor');
            this.entity.on('talk', this, 'talk');
        },

        sensor: function() {
            if (this.entity.p.sensor) {
                this.entity.play('stand');
                Q.audio.play('message_letter.mp3');
                this.entity.trigger('talk');
                Q.audio.play('message_end.mp3');
            }
        },

        talk: function(){
            var p = this.entity.p;
            for (let i in p.dialog) {
                Q.state.set('dialog', p.dialog[i]);
                Q.stageScene('talking');    
            }
        }
    });
};
