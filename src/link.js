function loadLink(Q){
    Q.Sprite.extend("Player",{
        init:function(p){
            this._super(p, {
                sheet: "link",
                sprite: "linkAnim",
                x:64,
                y: 40,
                gravity:0,
                stepDistance: 8, // should be tile size
                stepDelay: 0.2  // seconds to delay before next step
              });
              this.add('2d, stepControls, animation');
        //this.on("enemy.hit","enemyHit");
        },
        step:function(dt){
            this.play("walking_right");
            console.log(this.p.x, this.p.y);
        }
    })
}