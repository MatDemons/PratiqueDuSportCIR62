define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('ville', 'img/citybackground.jpg');
      this.load.image('GreyPixel', 'img/pixelGris.bmp');
      this.load.image('RedPixel', 'img/pixelRouge.bmp');
      this.load.spritesheet('voiture', 'img/voiture.png',175,62.5,8);
      this.load.spritesheet('bus', 'img/Bus.png',145,110,4);
      this.load.spritesheet('velo','img/velo1droit.png',300,300,1);
      // === Variable ===
      var ville;    // ville
      var GreyPixel;// fond gris
      var RedPixel; // fond rouge
      var Group;    // group du contour de ma carte
      var player;   // variable du joeur
      var f;        // variable de fin
  	}
  return preload;
});
