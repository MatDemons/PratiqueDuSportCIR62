define([''],
function(){
  var create = function(){
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // === initialisation du personnage qui bouge ===
    player = this.add.sprite(64,65, etat, 1); // je crée le player en fonction du Personnage
    this.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;
    // === initialisation d'une valeur d'objet
    player.valeur = 0;

    // === initialisation du pseudo text ===
    player.addChild(this.add.text(10,-5,input.value,{font: "16px Arial"}));
    Group = this.add.group();

    // === initialisation de la voiture ===
    voiture = this.add.sprite(0,0,'voiture',1);
    this.physics.enable(voiture, Phaser.Physics.ARCADE);
    voiture.body.collideWorldBounds = true;

    //==== initialisation des pixel ===>> (représentation du tableau)
    for(let i = 0; i < 10; ++i)
      for(let y = 0; y < 5; ++y)
        if(!(i == 0 || y == 0 || i == 9 || y == 4))
          GreyPixel = this.add.sprite(64*i,65*y,"GreyPixel");
        else
        {
          RedPixel = this.add.sprite(64*i,65*y,"RedPixel")
          this.physics.enable(RedPixel, Phaser.Physics.ARCADE);
          RedPixel.body.collideWorldBounds = true;
          RedPixel.body.immovable = true;
          Group.add(RedPixel);
        }

    // === initialisation les different déplacement du personnage ===
    player.animations.add('up', [0,1,2,3,4,5,6,7,8], 10, true); // je selection les different image du move avant
    player.animations.add('left', [9,10,11,12,13,14,15,16,17], 10, true); // .... du move gauche
    player.animations.add('down', [18,19,20,21,22,23,24,25,26], 10, true);// .... du move arrière
    player.animations.add('right', [27,28,29,30,31,32,33,34,35], 10, true); // ... du move droite
    player.bringToTop()

    voiture.animations.add('up', [2], 0, true);   // je selection les different image du move avant
    voiture.animations.add('left', [4], 0, true); // .... du move gauche
    voiture.animations.add('down', [6], 0, true); // .... du move arrière
    voiture.animations.add('right', [7], 0, true);// ... du move droite
    voiture.bringToTop();
	}
  return create;
});
