define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background1','img/backgroundGame4.jpg');
      this.load.image('start', 'img/start.png');
      this.load.image('background2','img/backgroundGame.jpg');

      // === Variable ===
  		var logo; // variable du logo.
      var start; // variable du bouton start.
  	}
  return preload;
});
