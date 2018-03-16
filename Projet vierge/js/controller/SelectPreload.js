define([''],
function(){
  var preload = function(){
    this.load.spritesheet('Perso1', 'img/Perso1.png',64,65,36);
    var Perso1;
    this.load.spritesheet('Perso2', 'img/Perso2.png',64,65,36);
    var Perso2;
    var etat = 0;
  	}
  return preload;
});
