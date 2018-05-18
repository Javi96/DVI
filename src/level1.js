function loadLevel1(Q) {
    /**
     * Escena que representa el nivel 1.
     */
    Q.scene('level1', function(stage) {

        Q.stageTMX('house_link.tmx', stage);

        stage.insert(new Q.Ganon());
    })
}

