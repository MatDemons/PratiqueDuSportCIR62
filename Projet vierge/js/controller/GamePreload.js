define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');

      // === Variable ===
      var s; // variable du Personnage qui bouge.
      var img1; // variable du fond'écran.
      var player;
      var left;
      var right;
  	}
  return preload;
});
