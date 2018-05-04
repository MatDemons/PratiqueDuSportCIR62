define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background1','img/backgroundGame4.jpg');
    	this.load.image('Button','img/PlayButton.png');
	    this.load.image('logo','img/NewFinalLogo2.png');

      // === Variable ===
  		var logo; // variable du logo.
      var Button; // variable du bouton start.
  	}
  return preload;
});
