function loadEnemy(Q){
Q.component("defaultEnemy", {
	defaults: {
		dead: false,
		type: Q.SPRITE_ENEMY,
		collisionMask: Q.SPRITE_PLAYER | Q.SPRITE_DEFAULT,
		gravity: 0
	},

	added: function(){
		var p = this.entity.p;

	  	Q._defaults(p,this.defaults);
	  
	 	this.entity.add("2d, animation, tween");
		this.entity.on("step",this,"step");
	},

	step: function(p){
		var p = this.entity.p;
		if(!p.dead){
			this.entity.play("walk");
		}
	}
})

Q.Sprite.extend("Ganon", {
	init: function(p){
		this._super({
			sheet:"ganonWalk",
			sprite:"ganonAnim",
			x:10,
			y:10
		})
		this.add("defaultEnemy");
	}
})
}