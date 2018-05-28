Quintus.Dialog = function(Q) {
    var st = Q.stage(0);

    var container = st.insert(new Q.UI.Container({
        fill: 'black',
        border: 5,
        borderColor: 'white',
        height: 100,
        width: Q.width - 50,
        x: Q.width/2,
        y: Q.height - 100
    }));

    st.insert(new Q.UI.Text({
        label: 'This is fine',
        color: 'white',
        x: 0,
        y: 0
    }), container);
}
