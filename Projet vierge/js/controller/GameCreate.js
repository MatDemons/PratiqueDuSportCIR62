define([''],
function(){
  var create = function(){
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // === initialisation du personnage qui bouge ===
    player = this.add.sprite(64,65, etat, 1); // je crée le player en fonction du Personnage
    player.scale.set(1); // reduit ou agrandi la taille
    this.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;
    // === initialisation du pseudo text ===
    player.addChild(this.add.text(10,-5,input.value,{font: "16px Arial"}));
    Group = this.add.group();

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
	}
  return create;
});
