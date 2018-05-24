function loadLevel1(Q) {
    /**
     * Escena que representa el nivel 1.
     */
    Q.scene('level1', function(stage) {

        Q.stageTMX('casa_link_map.tmx', stage);

        stage.insert(new Q.Ganon());

        var player = Q("Player").first();
        var sword = stage.insert(new Q.Sword(), player);

        stage.add("viewport").follow(player, { x: true, y: true }, {
            minY: 0,
            maxY: 512,
            minX: 0,
            maxX: 1024,
        });
        Q.audio.play('forest.mp3', {loop:true});

    })
}