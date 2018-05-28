Quintus.InitialMenu = function(Q) {

    Q.scene('initialMenu', function(stage) {
        console.log('Menu inicial');
        Q.audio.play('title_screen.mp3');
        stage.insert(new Q.Repeater({ asset: 'main_title.png' }));
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: Q.height * 1 / 10,
            fill: 'rgba(255,255,255)',
            type: Q.SPRITE_UI
        }));

        var label = container.insert(new Q.UI.Text({
            x: 0,
            y: 0,
            label: 'Press enter'
        }));

        Q.input.on('confirm', this, function() {
            console.log('house');
            Q.clearStages();
            Q.stageScene('houseLinkMap');
        });
        container.fit(15, 25);
    });
};