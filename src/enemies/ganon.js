var lock = true;
Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim', 
                score: 100,
                hp: 3
            });
            this.add('defaultEnemy');
        },
        step: function(dt) {
            this.p.invicible -= dt;
            if (!this.p.dead) {
                this.play('stand');
            }
            if(this.p.hp==2 && lock){
                lock = false;
                this.p.y=100;
                this.stage.insert(new Q.Deadrock({x:150,y:250}));
                this.stage.insert(new Q.Soldier({x:200,y:180}));
                this.stage.insert(new Q.Soldier({x:280,y:180}));
                this.stage.insert(new Q.Deadrock({x:325,y:250}));
                this.stage.insert(new Q.Deadrock({x:150,y:400}));
                this.stage.insert(new Q.Deadrock({x:325,y:400}));
            }
        }
    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true },
        stand: { frames: [9], loop: true }
    });
};