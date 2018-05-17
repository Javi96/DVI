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
        .setup({ maximize: true })
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

    Q.loadTMX('house_link.tmx, walking_tunic.png, walking_tunic.json, ganon.png, ganon.json', function() {
        Q.compileSheets("walking_tunic.png", "walking_tunic.json");

        Q.compileSheets("ganon.png", "ganon.json");

        Q.animations("ganonAnim", {
            walk: {frames: [5, 6], rate: 1/5, loop:true}
        });

        Q.animations("linkAnim", {
            "walking_right": { frames: [0,1,2,3,4,5,6,7], rate: 1/8, loop: true },
      });
              Q.stageScene('level1');

    });

});