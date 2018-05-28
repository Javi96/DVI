Quintus.CastleMap = function(Q) {
    /**
     * Escena que representa el castillo.
     */
    Q.scene('castleMap', function(stage) {

        Q.stageTMX('castillo_map.tmx', stage);

        var player = Q('Link').first();
        if (stage.options.xLink) {
            player.p.x = stage.options.xLink;
            player.p.y = stage.options.yLink;
        }
        var sword = stage.insert(new Q.Sword(), player);

        stage.add('viewport').follow(player, { x: true, y: true }, {
            minY: 0,
            maxY: 1024,
            minX: 0,
            maxX: 1024,
        });
        Q.audio.play('forest.mp3', { loop: true });

        
    });
};