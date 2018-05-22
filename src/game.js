window.addEventListener('load', function() {
    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus( /*{ audioSupported: ['mp3', 'ogg'] }*/ )
        /**
         * Se añaden los módulos necesarios para el funcionamiento de
         * la aplicación.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX')
        /**
         * Se ajusta la ventana.
         */
        .setup({ x: 500, y: 500 })
        /**
         * Se le añade funcionalidad.
         */
        .controls().touch(); /*.enableSound();*/


    Q.SPRITE_PLAYER = 1;
    Q.SPRITE_ENEMY = 2;
    /**
     * Cargamos los diversos componentes que utilizaremos durante el juego.
     */
    loadLevel1(Q);

    loadEnemy(Q);

    loadLink(Q);



    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */

    Q.loadTMX('house_link.tmx, casa_link_map.tmx, Link.png, Link.json, ganon.png, ganon.json', function() {
        
        Q.compileSheets("Link.png", "Link.json");

        Q.compileSheets("ganon.png", "ganon.json");

        Q.animations("ganonAnim", {
            walk: {frames: [5, 6], rate: 1/5, loop:true}
        });

        
              Q.stageScene('level1');

    });

});