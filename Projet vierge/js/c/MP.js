define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background1','img/backgroundGame4.jpg');
    	this.load.image('Button','img/PlayButton.png');
	    this.load.image('logo','img/NewFinalLogo2.png');
      this.load.image('generique_fin','img/end.jpg');
      this.load.image('close_win','img/close.png');

      // === Variable ===
  		var logo; // variable du logo.
      var Button; // variable du bouton start.
  	}
  return preload;
});
