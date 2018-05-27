Quintus.HouseLinkMap = function(Q) {
    /**
     * Escena que representa la casa de Link.
     */
    Q.scene('houseLinkMap', function(stage) {

        Q.stageTMX('house_link.tmx', stage);

        var player = Q('Link').first();
        if(stage.options.xLink){
            player.p.x = stage.options.xLink;
            player.p.y = stage.options.yLink;
        }
        var sword = stage.insert(new Q.Sword(), player);

        stage.add('viewport').follow(player, { x: true, y: true }, {
            minY: -125,
            maxY: 200,
            minX: -125,
            maxX: 100
        });
        Q.audio.play('forest.mp3', { loop: true });
    });
};