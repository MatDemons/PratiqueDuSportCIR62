define([''],
function(){
  var preload = function(){
    this.load.spritesheet('Perso1', 'img/Perso1.png',64,65,36);
    var Perso1;
    this.load.spritesheet('Perso2', 'img/Perso2.png',64,65,36);
    var Perso2;
    this.load.image('gauche', 'img/gauche.png');
    this.load.image('droite', 'img/droite.png');
    var etat;
    var difficile;
    var Facile;
  	}
  return preload;
});
