Quintus.Dialog = function(Q){
    Q.Sprite.extend('Dialog', {
        init: function(p){
            this._super(p, {
                asset: 'dialog_box.png',
                gravity: 0,
                type: Q.SPRITE_UI
            })
            this.on('talk', 'talk');
        },

        talk: function(){
            
        }
    });
}
