define([''],
function(){
  var create = function(){
    // === initialisation du fond d'écran ===
    img1 = this.add.sprite(-1280+500,-960+225,'background');
    img1.scale.setTo(2,2);
    this.physics.enable(img1, Phaser.Physics.ARCADE);

    // === initialisation du pseudo text ===
    afficher = this.add.text(505-32,215-32,input.value,{font: "16px Arial"});
    this.physics.enable(afficher, Phaser.Physics.ARCADE);

    // === initialisation du personnage qui bouge ===
    player = this.add.sprite(500-32, 225-32, etat, 1); // je crée le player en fonction du Personnage
    player.scale.set(1); // reduit ou agrandi la taille
    this.physics.enable(player, Phaser.Physics.ARCADE);

    // === initialisation les different déplacement du personnage ===
    player.animations.add('up', [0,1,2,3,4,5,6,7,8], 10, true); // je selection les different image du move avant
    player.animations.add('left', [9,10,11,12,13,14,15,16,17], 10, true); // .... du move gauche
    player.animations.add('down', [18,19,20,21,22,23,24,25,26], 10, true);// .... du move arrière
    player.animations.add('right', [27,28,29,30,31,32,33,34,35], 10, true); // ... du move droite

    // === création de la map ===
    player.cordonneX = 200;
    player.cordonneY = 200;
    carte = new Array();
    for(var i=0; i < 400; i++)
      carte[i] = new Array();
    for(let i = 0; i < 400; i++){
      for(let y = 0; y < 400; y++){
        carte[i][y] = 0;
        if(i == 0 || i == 400-1 || y == 0 || y == 400-1 )
          carte[i][y] = 1;
      }
    }

	}
  return create;
});
