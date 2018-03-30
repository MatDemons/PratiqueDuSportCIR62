define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');

      // === Variable ===
      var s; // variable du Personnage qui bouge.
      //var img1; // variable du fond'écran.
      var player; // variable du joeur
      var carte; // tableau de la map
  	}
  return preload;
});
