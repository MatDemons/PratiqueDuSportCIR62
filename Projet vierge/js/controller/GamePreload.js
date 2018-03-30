define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');
      this.load.image('pixel10x10', 'img/dixPixels.png');

      // === Variable ===
      var s; // variable du Personnage qui bouge.
      var pixel10x10;//variable du pixel 10x10
      //var img1; // variable du fond'écran.
      var player; // variable du joeur
      var carte; // tableau de la map
  	}
  return preload;
});
