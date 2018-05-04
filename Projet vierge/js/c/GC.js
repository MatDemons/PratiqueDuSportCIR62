define(['c/fonction'],
function(transport){
  var create = function(){
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.startSystem(Phaser.Physics.P2JS);
    //=== initialisation de la ville ===
    ville = this.add.sprite(-1280/2,-960/2,'ville',1);
    ville.scale.setTo(2,2);
    // === initialisation du personnage qui bouge ===
    T = new Array(); // je sauvegarde tout les type de transport
    transport(T,this,etat,500,500,100)
    // === initialisation d'une voiture ===
    transport(T,this,'voiture',200,100,200)
    // === initialisation d'un la Bus ===
    transport(T,this,'bus',300,200,150)
    // === initialisation d'un la velo ===
    transport(T,this,'velo',10,10,125)
    //==== initialisation des pixel === ( a remplacer plus tard)
    Group = this.add.group();
    for(let i = 0; i <= 100; ++i)
      for(let y = 0; y <= 100; ++y)
        if(i == 0 || y == 0 || i == 100 || y == 100)
        {
          RedPixel = this.add.sprite(i*10,y*10,"RedPixel")
          this.physics.enable(RedPixel, Phaser.Physics.ARCADE);
          RedPixel.body.immovable = true;
          Group.add(RedPixel);
        }
    //=== initialisation de la caméra ===
    player = T[0]
    player.addChild(this.add.text(10,-5,input.value,{font: "16px Arial"}));
    //=== definition des bord de la map ===
    this.world.setBounds(0, 0, 1010, 1010);
    //=== je definie que ma caméra suit mon joeur ===
    this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)
    //=== finish ===
    player.fx = Math.floor((Math.random() * 1000-280) + 1);
    console.log(player.fx);
    player.fy = Math.floor((Math.random() * 1000-138) + 1);
    console.log(player.fy);
    this.add.sprite(player.fx,player.fy,"Button");
	}
  return create;
});
