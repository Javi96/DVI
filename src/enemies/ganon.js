var lock = true;
Quintus.Ganon = function(Q) {

    Q.Sprite.extend('Ganon', {
        init: function(p) {
            this._super(p, {
                sheet: 'ganonWalk',
                sprite: 'ganonAnim', 
                score: 100,
                hp: 3,
                invokeFireTime: 0,
                hideousLaughter:false,
            });
            this.add('defaultEnemy');
            
            this.on('kicked', this, 'kicked');
            this.on('dead', this, 'dead');
        },
        step: function(dt) {
            this.p.invicible -= dt;
            if (!this.p.dead) {
                this.play('stand');
            }
            if(this.p.hideousLaughter){
                this.p.invokeFireTime = 1;
                if(!Q('Deadrock').first() && !Q('Soldier').first()){
                    this.p.hideousLaughter = false;
                    this.p.y = 300
                }
                
            }else{
                if(this.p.invokeFireTime <= 0){
                    this.p.invokeFireTime = 1;
                    this.stage.insert(new Q.fire({x:this.p.x, y:this.p.y}))
                }else{
                    this.p.invokeFireTime -= dt;
                }
            }

        },

        destroyEffect: function(){
            stair = Q('stair').first();
            stair.destroy();
            fire = Q('fire');  
            for(f of fire.items){
                f.destroy();
            }
        },

        kicked: function(){        
            if(!this.p.hideousLaughter)
            {
                this.p.hideousLaughter = true;
                this.p.y=100;
                this.stage.insert(new Q.Deadrock({x:150,y:250}));
                this.stage.insert(new Q.Soldier({x:200,y:180}));
                this.stage.insert(new Q.Soldier({x:280,y:180}));
                this.stage.insert(new Q.Deadrock({x:325,y:250}));
                this.stage.insert(new Q.Deadrock({x:150,y:400}));
                this.stage.insert(new Q.Deadrock({x:325,y:400}));
                fire = Q('fire')
                console.log(fire);
                for(f of fire.items){
                    f.destroy();
                }
            }
        }

    });

    Q.animations('ganonAnim', {
        walk: { frames: [5, 6], rate: 1 / 5, loop: true },
        stand: { frames: [9], loop: true }
    });
};