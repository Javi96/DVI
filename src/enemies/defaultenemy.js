Quintus.LoadDefaultEnemy = function(Q) {
    Q.component('defaultEnemy', {
        defaults: {
            dead: false,
            gravity: 0,
            invicibleTime: 1,
            invicible: 0
        },

        added: function() {
            Q._defaults(this.entity.p, this.defaults);
            this.entity.add('animation, tween');
            this.entity.on('kicked', this, 'kicked');
        },

        kicked: function() {
            if (this.entity.p.invicible < 0) {
                this.entity.p.invicible = this.entity.p.invicibleTime;
                this.entity.p.hp--;

                if (this.entity.p.hp == 0) {
                    Q.audio.play('enemy_killed.mp3');
                    this.entity.trigger('dead');
                } else {
                    Q.audio.play('enemy_hurt.mp3');
                    this.entity.animate({ opacity: 0 }, 0.5);
                    this.entity.animate({ opacity: 1 }, 0.5, { delay: 0.5 });
                }
            }
        }
    });
};