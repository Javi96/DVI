function loadLevel1(Q) {
    /**
     * Escena que representa el nivel 1.
     */
    Q.scene('level1', function(stage) {
        Q.stageTMX('city.tmx', stage);
        stage.add("viewport").centerOn(10, 30);
    });
}