Quintus.ZeldaMap = function(Q) {
    /**
     * Escena que representa la sala en la que se encuentra Zelda, 
     * carga el mapa, la música y a Link con su espada.
     */
    Q.scene('zelda', function(stage) {

        Q.stageTMX('zelda_map.tmx', stage);
        var player = Q('Link').first();
        if (stage.options.xLink) {
            player.p.x = stage.options.xLink;
            player.p.y = stage.options.yLink;
        }
        var sword = stage.insert(new Q.Sword(), player);

        stage.add('viewport').follow(player, { x: true, y: true }, {
            minY: 0,
            maxY: 450,
            minX: 0,
            maxX: 416,
        });
        Q.audio.play('forest.mp3', { loop: true });
    });
};