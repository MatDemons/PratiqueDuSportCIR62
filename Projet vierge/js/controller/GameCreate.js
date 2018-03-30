define([''],
function(){
  var create = function(){
    // === initialisation du fond d'écran ===
    //img1 = this.add.sprite(-1280+500,-960+225,'background');
    //img1.scale.setTo(2,2);

    // === initialisation du pseudo text ===
    afficher = this.add.text(200+5,200-5,input.value,{font: "16px Arial"});

    // === initialisation du personnage qui bouge ===
    player = this.add.sprite(200,200, etat, 1); // je crée le player en fonction du Personnage
    player.scale.set(1); // reduit ou agrandi la taille

    // === initialisation les different déplacement du personnage ===
    player.animations.add('up', [0,1,2,3,4,5,6,7,8], 10, true); // je selection les different image du move avant
    player.animations.add('left', [9,10,11,12,13,14,15,16,17], 10, true); // .... du move gauche
    player.animations.add('down', [18,19,20,21,22,23,24,25,26], 10, true);// .... du move arrière
    player.animations.add('right', [27,28,29,30,31,32,33,34,35], 10, true); // ... du move droite

    // === création de la map ===
    carte = new Array();
    for(var i=0; i < 40; i++)
      carte[i] = new Array();
    for(let i = 0; i < 40; i++){
      for(let y = 0; y < 40; y++){
        carte[i][y] = 0;
        if(i == 0 || i == 40-1 || y == 0 || y == 40-1 )
          carte[i][y] = 1;
      }
    }

    //==== initialisation des pixel ===>> (représentation du tableau)
    for(let i in carte)
      for(let y in carte[i])
        if(carte[i][y] != 1)
          pixel10x10 = this.add.sprite(65*i,65*y,"pixel10x10")

	}
  return create;
});
