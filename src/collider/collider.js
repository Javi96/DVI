Quintus.Collider = function(Q) {
    Q.Sprite.extend('Collider', {
        init: function(p) {
            this._super(p, {
                sheet: p.sprite,
                type: Q.SPRITE_DOOR,
                collisionMask: Q.SPRITE_NONE,
                sensor: true,
                gravity: 0                
            })
            this.add("animation");
            this.on("sensor");
        },

        sensor: function(col){
            var nextDoor = this.p.to;
            Q.stageScene(nextDoor);
            col.obj.p.x = nextDoor.x;
            col.obj.p.y = nextDoor.y;
        },

        findLinkedDoor: function() {
            return this.stage.find(this.p.to);
        }
    });
}