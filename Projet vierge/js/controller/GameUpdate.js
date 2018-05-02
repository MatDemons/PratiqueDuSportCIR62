define([''],
function(){
  var update = function(){
    player.body.velocity.set(0);
    voiture.body.velocity.set(0);
    bus.body.velocity.set(0);
    velo.body.velocity.set(0);
    this.physics.arcade.collide(player, Group);
    this.physics.arcade.collide(voiture,  Group);
    this.physics.arcade.collide(bus, Group);
    this.physics.arcade.collide(velo, Group);
  if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    switch (player.valeur) {
      case 0:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          if(this.physics.arcade.collide(player, voiture)){
            player.valeur = 1;
            player.visible = false;
            this.camera.follow(voiture, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          }
          if(this.physics.arcade.collide(player, bus)){
            player.valeur = 2;
            player.visible = false;
            this.camera.follow(bus, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          }
          if(this.physics.arcade.collide(player, velo)){
            player.valeur = 3;
            player.visible = false;
            this.camera.follow(velo, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          }
          break;
        }
      }
      case 1:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          player.valeur = 0;
          player.x = voiture.x+60;
          player.y = voiture.y+20;
          player.visible = true;
          break;
        }
      }
      case 2:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          player.valeur = 0;
          player.x = bus.x+40;
          player.y = bus.y+10;
          player.visible = true;
          break;
        }
      }
      case 3:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
          player.valeur = 0;
          player.x = velo.x+10;
          player.y = velo.y+5;
          player.visible = true;
          break;
        }
      }
    }
  }

  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
      switch (player.valeur) {
        case 0: {
          player.play('left');
          player.body.velocity.x = -100;
          break;
        }
        case 1:{
          voiture.play('left');
          voiture.body.velocity.x = -200;
          break;
        }
        case 2:{
          bus.play('left');
          bus.body.velocity.x = -150;
          break;
        }
        case 3:{
          //velo.play('left');
          velo.body.velocity.x = -125;
          break;
        }
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
      switch (player.valeur) {
        case 0: {
          player.play('right');
          player.body.velocity.x = 100;
          break;
        }
        case 1: {
          voiture.play('right');
          voiture.body.velocity.x = 200;
          break;zz
        }
        case 2: {
          bus.play('right');
          bus.body.velocity.x = 150;
          break;
        }
        case 3: {
          //velo.play('right');
          velo.body.velocity.x = 125;
          break;
        }
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
      switch (player.valeur) {
        case 0: {
          player.play('up');
          player.body.velocity.y = -100;
          break;
        }
        case 1: {
          voiture.play('up');
          voiture.body.velocity.y = -200;
          break;
        }
        case 2: {
          bus.play('up');
          bus.body.velocity.y = -150;
          break;
        }
        case 3: {
          //velo.play('up');
          velo.body.velocity.y = -125;
          break;
        }
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
      switch (player.valeur) {
        case 0: {
          player.body.velocity.y = 100;
          player.play('down');
          break;
        }
        case 1:{
          voiture.play('down');
          voiture.body.velocity.y = 200;
          break;
        }
        case 2: {
          bus.play('down');
          bus.body.velocity.y = 150;
          break;
        }
        case 3: {
          //velo.play('down');
          velo.body.velocity.y = 125;
          break;
        }
      }

  }
  else
  {
    player.animations.stop();
    voiture.animations.stop();
    bus.animations.stop();
    velo.animations.stop();
  }
  if(player.x <= 150 && player.y <= 150)// a définir
    this.state.start('finish');
}
  return update;
});
