window.addEventListener('load', function() {
    /**
     * Variable principal del Quintus.
     */
    var Q = Quintus({ development: true, audioSupported: ['mp3'] })
        /**
         * Se añaden los módulos necesarios para el funcionamiento
         * del juego.
         */
        .include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')
        .include('HouseLinkMap, HouseLinkForestMap, InitialMenu, EndGame')
        .include('Link, SwordLink')
        .include('LoadDefaultEnemy, Ganon')
        .include('DefaultNPC')
        .include('Item, Chest')
        .include('Collider')
        /**
         * Se ajusta la ventana del juego.
         */
        .setup({ width: 822, heigth: 462 })
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
    Q.SPRITE_ENEMY = 4;
    Q.SPRITE_CHEST = 8;
    Q.SPRITE_COLLIDER = 16;

    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    var confirm = false;        
    var screen = 'main_title.png, end_game.png';
    var maps = 'house_link.tmx, house_link_forest.tmx';
    var link = 'link.png, link.json, loading.sword3.png, loading.sword3.json, sword.sword3.png, sword.sword3.json';
    var enemies = 'enemy_ganon.png, enemy_ganon.json';
    var items = 'item_lamp.png, item_chest.png, item_chest.json';
    var sounds = 'forest.mp3, sword1.mp3, chest_open.mp3, picked_item.mp3, title_screen.mp3';


    Q.loadTMX(maps + ', ' + link + ', ' + enemies + ', ' + items + ', ' + sounds + ', ' + screen, function() {
        Q.compileSheets('link.png', 'link.json');
        Q.compileSheets('loading.sword3.png', 'loading.sword3.json');
        Q.compileSheets('sword.sword3.png', 'sword.sword3.json');
        Q.compileSheets('enemy_ganon.png', 'enemy_ganon.json');

        Q.compileSheets('item_chest.png', 'item_chest.json');
        Q.stageScene('initialMenu');
    });
});