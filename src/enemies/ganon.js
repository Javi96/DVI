Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim',
                hp: 3, 
                type:Q.SPRITE_ENEMY,
                name:"gannon",
                invulnerabilityTime : 1,
                invulnerability:false,
            });
            this.add('defaultEnemy');
            this.on('getHit', 'getHit')
            this.on('dead', 'dead')
        },
        step: function(dt) {
            if (!this.p.dead) {
                this.play('walk');
            }
            if(this.p.invulnerabilityTime <= 0){
                this.p.invulnerabilityTime = 1;
                this.p.invulnerability = false;
                this.animate({"opacity":1}, 1);
            }else{
                var opacity = (this.p.invulnerability == 1 ? 0 : 1);
                this.p.invulnerabilityTime -= dt;
                this.animate({"opacity":opacity}, 0);
            }
        },
        getHit: function(){
            if(!this.p.invulnerability){
                this.p.invulnerability = true;
                this.p.hp--;
                if(this.p.hp == 0){
                    this.trigger("dead");
                }

            }
        },
        dead: function(){
            console.log("Oh no, maldito seas scooby dooooooo");
            console.log("uy fallo de juego")
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true }

    });
}