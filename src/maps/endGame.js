Quintus.EndGame = function(Q) {

    Q.scene('endGame', function(stage) {
        console.log('Game over');
        stage.insert(new Q.Repeater({ asset: 'end_game.png' }));
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
            if (confirm) {
                console.log('house');
                Q.clearStages();
                Q.stageScene('houseLinkMap');
                confirm = false;
            }
        });
        container.fit(15, 25);

        //Q.stageScene('houseLinkMap');
    });
};