Quintus.EndGame = function(Q) {

    /**
     * Escena que representa el final de juego malo (game over), 
     * al pulsar ENTER se reinicia el juego en la casa de Link.
     */
    Q.scene('endGame', function(stage) {
        console.log('Game over');
        var confirm = true;
        var over = stage.insert(new Q.GameOver());
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
                Q.audio.stop();
                Q.clearStages();
                Q.state.reset({ score: 0, lives: 3, maxLives: 3, dialog: "" });
                Q.stageScene('initialMenu');
                confirm = false;
            }
        });
        Q.audio.play('game_over.mp3');
        stage.add('viewport').follow(over);
        container.fit(15, 25);
    });
};