Quintus.HouseLinkForestMap = function(Q) {
    /**
     * Escena que representa el bosque, 
     * carga el mapa, la música y a Link con su espada.
     */
    Q.scene('houseLinkForestMap', function(stage) {

        Q.stageTMX('house_link_forest.tmx', stage);
        var player = Q('Link').first();
        if (stage.options.xLink) {
            player.p.x = stage.options.xLink;
            player.p.y = stage.options.yLink;
        }
        var sword = stage.insert(new Q.Sword(), player);
        
        stage.add('viewport').follow(player, { x: true, y: true }, {
            minY: 0,
            maxY: 512,
            minX: 0,
            maxX: 1024,
        });
        Q.audio.play('forest.mp3', { loop: true });
    });
};