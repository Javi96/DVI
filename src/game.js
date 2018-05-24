window.addEventListener('load', function() {






    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus({ development: true, audioSupported: [ 'ogg', 'mp3' ] } /*{ audioSupported: ['mp3', 'ogg'] }*/ )
        /**
         * Se añaden los módulos necesarios para el funcionamiento de
         * la aplicación.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        /**
         * Se ajusta la ventana.
         */
        .setup({ x: 500, y: 500 })
        /**
         * Se le añade funcionalidad.
         */
        .controls().touch().enableSound(); /*.enableSound();*/

        Q.SPRITE_NONE = 0;
        Q.SPRITE_PLAYER = 1;
        Q.SPRITE_SWORD = 2;
    /**
     * Cargamos los diversos componentes que utilizaremos durante el juego.
     */
    loadLevel1(Q);

    loadEnemy(Q);

    loadSword(Q);

    loadLink(Q);



    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */

    Q.loadTMX('house_link.tmx, forest.mp3, casa_link_map.tmx, Link.png, Link.json, ganon.png, ganon.json, loading.sword3.png, loading.sword3.json', function() {
        
        Q.compileSheets("Link.png", "Link.json");

        Q.compileSheets("ganon.png", "ganon.json");

        Q.compileSheets("loading.sword3.png", "loading.sword3.json")

        Q.animations("ganonAnim", {
            walk: {frames: [9, 5, 6], rate: 1/5, loop:true}
        });

        Q.stageScene('level1');

    });


    

});