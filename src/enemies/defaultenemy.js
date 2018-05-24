Quintus.LoadDefaultEnemy = function(Q) {
    Q.component('defaultEnemy', {
        defaults: {
            dead: false,
            type: Q.SPRITE_ENEMY,
            collisionMask: Q.SPRITE_PLAYER | Q.SPRITE_DEFAULT,
            gravity: 0
        },

        added: function() {
            var p = this.entity.p;

            Q._defaults(p, this.defaults);

            this.entity.add('animation, tween');
        },

        hit: function(col) {
            var p = this.entity.p;
            if (col.obj.isA('Player') && !col.obj.dead) {
                if (col.obj.sword) {
                    col.obj.trigger('hit');
                } else {
                    p.hp--;
                    if (p.hp == 0) {
                        p.dead = true;
                    }
                }
            }
        }
    });
};