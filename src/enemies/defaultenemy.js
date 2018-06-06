Quintus.LoadDefaultEnemy = function(Q) {
    Q.component('defaultEnemy', {
        defaults: {
            dead: false,
            gravity: 0,
            invicibleTime: 1,
            invicible: 0,
            score: 1
        },

        added: function() {
            this.entity.p.type = Q.SPRITE_ENEMY;
            Q._defaults(this.entity.p, this.defaults);
            this.entity.add('animation, tween');
            this.entity.on('kicked', this, 'kicked');
            this.entity.on('dead', this, 'dead');
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
        },
        dead: function() {
            var obj = this.entity.stage.insert(new Q.EnemyKilled({ x: this.entity.p.x, y: this.entity.p.y }));
            Q.state.inc('score', this.entity.p.score);
            Q.state.set(this.entity.p.id_enemy, true);
            this.entity.destroy();
        }
    });
};