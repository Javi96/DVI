window.addEventListener('load', function() {
    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus({ development: true, audioSupported: ['ogg', 'mp3'] })
        /**
         * Se añaden los módulos necesarios para el funcionamiento
         * del juego.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        .include('HouseLinkMap, HouseLinkForestMap')
        .include('Link, SwordLink')
        .include('LoadDefaultEnemy, Ganon')
        .include('DefaultNPC')
        /**
         * Se ajusta la ventana del juego.
         */
        .setup({ width: 500, heigth: 500 })
        /**
         * Se le añade funcionalidad.
         */
        .controls().touch().enableSound();
    /**
     * Máscaras para los sprites personalizados.
     */
    Q.SPRITE_NONE = 0;
    Q.SPRITE_PLAYER = 1;
    Q.SPRITE_SWORD = 2;

    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    var mapas = 'house_link.tmx, house_link_forest.tmx';
    var link = 'link.png, link.json, loading.sword3.png, loading.sword3.json';
    var enemies = 'ganon.png, ganon.json';
    var sounds = 'forest.mp3';

    Q.loadTMX(mapas + ', ' + link + ', ' + enemies + ', ' + sounds, function() {

        Q.compileSheets('link.png', 'link.json');
        Q.compileSheets('loading.sword3.png', 'loading.sword3.json');

        Q.compileSheets('ganon.png', 'ganon.json');

        Q.stageScene('houseLinkForestMap');
    });
});