Quintus.Talking = function(Q){
    
    Q.scene('talking', function(stage) {
        var txt = new Q.UI.Text({
            //label: stage.options.label,
            label: Q.state.get('dialog'),
            y: 0,
            x: 0,
            color: 'white'
        });
        var d = stage.insert(new Q.Dialog());
        stage.insert(txt, d);

    }, { stage: 2 });


    
}

