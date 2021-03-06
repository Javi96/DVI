Quintus.Fire = function(Q) {

    /**
     * Sprite que representa los ataques de fuego de Ganon
     */
    Q.Sprite.extend('fire', {
        init: function(p) {
            this._super(p, {
                asset: "explosion.png",
                collisionMask: Q.SPRITE_PLAYER | Q.SPRITE_WALL | Q.SPRITE_FIRE,
                type: Q.SPRITE_FIRE,
                gravity:0,
                target: undefined,
                vx: 0,
                vy: 0,
                lifeTime: 8,
                delay:1,
            })
            this.add('2d, aiBounce');
            this.p.target = (Q('Link').first()).p;
        },

        /**
         * Se define el rebote
         * y la desaparición de las bolas de fuego
         */
        step: function(dt) {
            if(this.p.delay - dt > 0)
                this.p.delay -= dt;
            else{
                if(this.p.vx == 0 && this.p.vy == 0){
                    deltaX = this.p.target.x - this.p.x;
                    deltaY = this.p.target.y - this.p.y;
                    scale = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                    total = Math.abs(deltaX) + Math.abs(deltaY);
                    this.p.vx = (deltaX / scale) * 75;
                    this.p.vy = (deltaY / scale) * 75;
                }else{
                    this.p.lifeTime -=dt;
                    if(this.p.lifeTime <= 0){
                        this.destroy();
                    }
                }
            }
        },
    });

    
};