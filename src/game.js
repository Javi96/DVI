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

    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    Q.loadTMX('house_link.tmx', function() {
        Q.stageScene('level1');
    });
});