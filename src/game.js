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
    /**
     * Cargamos los diversos componentes que utilizaremos durante el juego.
     */
    loadLevel1(Q);
    loadLink(Q);


    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    Q.loadTMX('house_link.tmx, walking_tunic.png, walking_tunic.json', function() {
        Q.compileSheets("walking_tunic.png", "walking_tunic.json");

        Q.animations("linkAnim", {
            "walking_right": { frames: [0,1,2,3,4,5,6,7], rate: 1/8, loop: true },
      });
              Q.stageScene('level1');

    });
});