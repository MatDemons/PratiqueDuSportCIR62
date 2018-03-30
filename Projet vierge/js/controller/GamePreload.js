define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');
      this.load.image('GreyPixel', 'img/GreyPixel.bmp');
      this.load.image('RedPixel', 'img/RedPixel.bmp');
      // === Variable ===
      var s; // variable du Personnage qui bouge.
      var GreyPixel;
      var RedPixel;
      //var img1; // variable du fond'écran.
      var player; // variable du joeur
      var carte; // tableau de la map
  	}
  return preload;
});
