define([''],
function(){
  var create = function(){
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // === initialisation du personnage qui bouge ===
    player = this.add.sprite(64,65, etat, 1); // je crée le player en fonction du Personnage
    this.physics.enable(player, Phaser.Physics.ARCADE);
    // === initialisation d'une valeur d'objet
    player.valeur = 0;

    // === initialisation du pseudo text ===
    player.addChild(this.add.text(10,-5,input.value,{font: "16px Arial"}));
    Group = this.add.group();

    // === initialisation de la voiture ===
    voiture = this.add.sprite(200,100,'voiture',1);
    this.physics.enable(voiture, Phaser.Physics.ARCADE);

    //==== initialisation des pixel ===>> (représentation du tableau)
    for(let i = 0; i <= 20; ++i)
      for(let y = 0; y <= 20; ++y)
        if(!(i == 0 || y == 0 || i == 20 || y == 20))
          GreyPixel = this.add.sprite(i,y,"GreyPixel");
        else
        {
          RedPixel = this.add.sprite(i,y,"RedPixel")
          this.physics.enable(RedPixel, Phaser.Physics.ARCADE);
          RedPixel.body.immovable = true;
          Group.add(RedPixel);
        }
    voiture.animations.add('up', [2], 0, true);   // je selection les different image du move avant
    voiture.animations.add('left', [4], 0, true); // .... du move gauche
    voiture.animations.add('down', [6], 0, true); // .... du move arrière
    voiture.animations.add('right', [7], 0, true);// ... du move droite
    voiture.bringToTop();

    // === initialisation les different déplacement du personnage ===
    player.animations.add('up', [0,1,2,3,4,5,6,7,8], 10, true); // je selection les different image du move avant
    player.animations.add('left', [9,10,11,12,13,14,15,16,17], 10, true); // .... du move gauche
    player.animations.add('down', [18,19,20,21,22,23,24,25,26], 10, true);// .... du move arrière
    player.animations.add('right', [27,28,29,30,31,32,33,34,35], 10, true); // ... du move droite
    player.bringToTop()

    // === initialisation de la caméra
    this.world.setBounds(0, 0, 100, 100);
    this.physics.startSystem(Phaser.Physics.P2JS);
    player.body.fixedRotation = true;
    voiture.body.fixedRotation = true;
	}
  return create;
});
