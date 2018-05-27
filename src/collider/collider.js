Quintus.Collider = function(Q) {
    Q.Sprite.extend('Collider', {
        init: function(p) {
            this._super(p, {
                asset: 'item_lamp.png',
                sensor: true,               
            });
            this.on('sensor', this, 'sensor');
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
};