define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('background', 'img/citybackground.jpg');
      this.load.image('GreyPixel', 'img/pixelGris.bmp');
      this.load.image('RedPixel', 'img/pixelRouge.bmp');
      this.load.spritesheet('voiture', 'img/voiture.png',240,80,8);
      this.load.spritesheet('bus', 'img/BusFinal2.png',160,160,4);
      this.load.spritesheet('velo','img/velo1droit.png',300,300,1);
      // === Variable ===
      var s; // variable du Personnage qui bouge.
      var GreyPixel;// fond gris
      var RedPixel;// fond rouge
      var Group;
      var player; // variable du joeur
      var voiture; // la voiture avance !!
      var bus; // le bus avance !!
      var valeur; // je crée une valeur d'équipement
      var velo; // velo velo hoooohooohohoo
  	}
  return preload;
});
