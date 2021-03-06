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
        .include('ZeldaMap, BossMap, Hud, CastleMap, HouseLinkMap, HouseLinkForestMap, InitialMenu, EndGame, WinGame')        .include('Link, SwordLink')
        .include('LoadDefaultEnemy, Ganon, Deadrock, Soldier, EnemyKilled, Fire')
        .include('DefaultNPC, Uncle, Zelda, Guard')
        .include('Item, Chest, Rupee, Stair')
        .include('Collider, Intro, GameOver, winGame, Talking')
        .include('Heart, RupeeCount, Dialog')
        /**
         * Se ajusta la ventana del juego.
         */
        .setup({ width: 416, heigth: 300 })
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
    Q.SPRITE_RUPEE = 32;
    Q.SPRITE_NPC = 64;
    Q.SPRITE_WALL = 128;
    Q.SPRITE_FIRE = 256;

    /**
     * Cargamos los ficheros que necesitamos para el juego.
     */
    var confirm = false;
    var screen = 'intro.png, intro.json, end_game.png, win_game.png';
    var maps = 'zelda_map.tmx, interior_1_map.tmx, house_link.tmx, house_link_forest.tmx, castle_map.tmx';

    var link = 'link.png, link.json, loading.sword3.png, loading.sword3.json, sword.sword3.png, sword.sword3.json, dying.png, dying.json';
    var enemies = 'enemy_ganon.png, enemy_ganon.json, enemy_deadrock.png, enemy_deadrock.json, enemy_soldier.png, enemy_soldier.json, enemy_killed.png, enemy_killed.json, explosion.png';
    var npcs = 'uncle.png, uncle.json, zelda_npc.png, zelda.json, alttp.png, alttp.json';
    var items = 'item_potion.png, item_lamp.png, item_chest.png, item_chest.json, stairs.png, stair.json';
    var UI = 'hearts.png, heart.json, dialog_box.png, rupee_icon.png';
    var sounds = 'forest.mp3, sword1.mp3, chest_open.mp3, picked_item.mp3, title_screen.mp3, hero_dying.mp3, hero_hurt.mp3, heart.mp3, game_over.mp3, rupee_counter.mp3, enemy_hurt.mp3, enemy_killed.mp3, message_letter.mp3, message_end.mp3';


    Q.loadTMX(maps + ', ' + link + ', ' + enemies + ', ' + npcs + ', ' + items + ', ' + UI + ', ' + sounds + ', ' + screen, function() {
        Q.compileSheets('link.png', 'link.json');
        Q.compileSheets('loading.sword3.png', 'loading.sword3.json');
        Q.compileSheets('sword.sword3.png', 'sword.sword3.json');

        Q.compileSheets('stairs.png', 'stair.json');
        Q.compileSheets('enemy_ganon.png', 'enemy_ganon.json');
        Q.compileSheets('enemy_deadrock.png', 'enemy_deadrock.json');
        Q.compileSheets('enemy_soldier.png', 'enemy_soldier.json');
        Q.compileSheets('enemy_killed.png', 'enemy_killed.json');

        Q.compileSheets('uncle.png', 'uncle.json');
        Q.compileSheets('zelda_npc.png', 'zelda.json');
        Q.compileSheets('alttp.png', 'alttp.json');

        Q.compileSheets('item_chest.png', 'item_chest.json');
        Q.compileSheets('hearts.png', 'heart.json');

        Q.compileSheets('intro.png', 'intro.json');
        Q.compileSheets('dying.png', 'dying.json');

        Q.stageScene('initialMenu');
    });
});
