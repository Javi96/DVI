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
                stepDelay: 0.1  // seconds to delay before next step
              });
              this.add('2d, stepControls, animation');
        //this.on("enemy.hit","enemyHit");
        },
        step:function(dt){
        	if(Q.inputs['up']){
	        	this.play("walking_up");
	        }else if(Q.inputs['down']){
	        	this.play("walking_down");
	        }else if(Q.inputs['right']){
	        	this.play("walking_right");
	        }else if(Q.inputs['left']){
				this.play("walking_left");
	        }else{

	        }
            
            
        }
    });

    Q.animations("linkAnim", {
		"walking_right": { frames: [0,1,2,3,4,5,6,7], rate: 1/16, next: 'stand_right' },
		"stand_right": { frames: [0] },

		"walking_up": { frames: [11,12,13,14,15,16,17,18], rate: 1/16, next: 'stand_up'},
		"stand_up": { frames: [11] },

		"walking_down": { frames: [44,45,46,47,48,49,50,51], rate: 1/16, next: 'stand_down' },
		"stand_down": { frames: [44] },

		"walking_left": { frames: [33,34,35,36,37,38,39,40], rate: 1/16, next: 'stand_left' },
		"stand_left": { frames: [33] }
 
      });
}