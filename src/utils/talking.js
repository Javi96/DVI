Quintus.Talking = function(Q){
    /*
     * Clase que define los diálogos de los npc.
     */
    Q.scene('talking', function(stage) {
        var d = stage.insert(new Q.Dialog());

        var txt = new Q.UI.Text({
            label: Q.state.get('dialog'),
            x: 0,
            y: -25,
            color: 'white',
            size: 20,
            align: 'top',
            outlineColor: 'blue',
            outlineWidth: 3,
            family: 'Trebuchet MS',

        }); 
        stage.insert(txt, d);

    }, { stage: 2 });



}
