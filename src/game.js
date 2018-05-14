var game = function() {
	var LEFT = 13;
	var RIGHT = 1980;
  var Q = (window.Q = Quintus({ development: true, audioSupported: [ 'mp3','ogg' ] })
    .include("Sprites, Scenes, Input, UI, Touch, TMX, Anim, 2D, Audio")
    .setup({
      width: 800,
      height: 800
    })
    .controls() 
    .touch()
    .enableSound());


  

  ////////// Load TMX level //////////
	Q.scene("level1", function(stage) {
		Q.stageTMX("level1.tmx", stage);
		stage.add("viewport").centerOn(150, 380);
	});

	Q.loadTMX("level1.tmx", function() {
		Q.stageScene("level1");	
	});

};