define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');
      this.load.image('GreyPixel', 'img/GreyPixel.bmp');
      this.load.image('RedPixel', 'img/RedPixel.bmp');
      // === Variable ===
      var s; // variable du Personnage qui bouge.
      var GreyPixel;// fond gris
      var RedPixel;// fond rouge
      var Group;
      var player; // variable du joeur
  	}
  return preload;
});
