Quintus.DefaultNPC = function(Q) {
    Q.component('defaultNPC', {
        defaults: {
            gravity: 0,
            sensor: true,
            count: 0,
            continue: false,
        },

        added: function() {
            this.entity.p.type = Q.SPRITE_NPC;
            Q._defaults(this.entity.p, this.defaults);

            this.entity.add('animation, tween');
            this.entity.on('sensor', this, 'sensor');
            this.entity.on('talk', this, 'talk');
            this.entity.on('endTalk', this, 'endTalk');
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
            Q.state.set('dialog', p.dialog[p.count]);
            Q.stageScene('talking');
            p.count++;
            if(p.count >= p.dialog.length){
                p.count = 0;
                p.continue = false;
            }
        },

        endTalk: function(obj){
            obj.p.talking = false; 
            this.entity.p.continue = true;           
            Q.clearStage(2);
        }
    });
};
