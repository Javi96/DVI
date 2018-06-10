Quintus.BossMap = function(Q) {
    /**
     * Escena que representa el castillo.
     */
    Q.scene('boss', function(stage) {

        Q.stageTMX('interior_1_map.tmx', stage);

        var player = Q('Link').first();
        if (stage.options.xLink) {
            player.p.x = stage.options.xLink;
            player.p.y = stage.options.yLink;
        }
        var sword = stage.insert(new Q.Sword(), player);
        //stage.insert(new Q.stair({x:201,y:152}));
        stage.add('viewport').follow(player, { x: true, y: true }, {
            minY: 0,
            maxY: 464,
            minX: 0,
            maxX: 496,
        });
        Q.audio.play('forest.mp3', { loop: true });
    });
};