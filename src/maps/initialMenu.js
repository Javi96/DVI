Quintus.InitialMenu = function(Q) {

    Q.scene('initialMenu', function(stage) {
        console.log('Menu inicial');
        var confirm = true;
        var intro = stage.insert(new Q.Intro());
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 100,
            y: Q.height / 2.5,
            fill: 'rgba(0,0,0,0)',
            type: Q.SPRITE_UI
        }));

        var label = container.insert(new Q.UI.Text({
            x: 0,
            y: 0,
            color: 'white',
            label: 'Press enter'
        }));

        Q.input.on('confirm', this, function() {
            if (confirm) {
                console.log('house');
                Q.audio.stop();
                Q.clearStages();
                Q.state.reset({ score: 0, lives: 3, maxLives: 3, dialog: "" });
                Q.stageScene('hud');
                Q.stageScene('houseLinkMap');
                confirm = false;
            }
        });
        Q.audio.play('title_screen.mp3');
        stage.add('viewport').follow(intro);
        container.fit(15, 25);
    });
};