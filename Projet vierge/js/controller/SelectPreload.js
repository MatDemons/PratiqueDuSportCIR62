define([''],
function(){
  var preload = function(){
    // === Chargement ===
    this.load.spritesheet('Perso1', 'img/Perso1.png',64,65,36);
    this.load.spritesheet('Perso2', 'img/Perso2.png',64,65,36);
    this.load.image('gauche', 'img/gauche.png');
    this.load.image('droite', 'img/droite.png');
	  this.load.image('background2','img/backgroundGame.jpg');

    // === Variable ===
    var Perso1; // variable qui stock le sprite du Perso1
    var Perso2; // variable qui stock le sprite du Perso2
    var difficile; // Text du "Difficile".
    var Facile; // Text du "Facile".
    var inpute; // variable du bouton speudo.
    var etat; // variable qui retient le choix de la difficulté.

    // === Plugin ===
    this.add.plugin(PhaserInput.Plugin); // ajoute le plugin Inpute de Phaser.
  	}
  return preload;
});
