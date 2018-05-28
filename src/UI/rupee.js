Quintus.Rupee = function(Q){
    Q.Sprite.extend('Rupee', {
        init: function(p){
            this._super(p, {
                asset: "rupee_icon.png",
                gravity: 0,
                type: Q.SPRITE_UI
            })
        }
    });

    Q.UI.Text.extend("Score",{
        init: function() {
          this._super({
            label: "x 0"
          });
    
          Q.state.on("change.score",this,"score");
        },
    
        score: function(score) {
          this.p.label = "x " + score;
        }
      });
}