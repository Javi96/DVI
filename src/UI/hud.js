Quintus.Hud = function(Q) {
    Q.scene('hud', function(stage) {
        var hearts = [];
        for (var i = 0; i < 3; i++) {
            hearts[i] = new Q.Heart({ x: 20 + i * 20, num: i });
            if (Q.state.get('maxLives') > Q.state.get('lives') && i >= Q.state.get('lives')) {
                hearts[i].p.frame = 2;
            }
            stage.insert(hearts[i]);
        }
        stage.insert(new Q.RupeeCount());
        stage.insert(new Q.Score());
    }, { stage: 1 });
};