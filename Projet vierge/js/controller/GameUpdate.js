define([''],
function(){
  var update = function(){
    player.body.velocity.set(0);
    voiture.body.velocity.set(0);
    this.physics.arcade.collide(player, Group);
    this.physics.arcade.collide(voiture,  Group);
  if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    switch (player.valeur) {
      case 0:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          if(this.physics.arcade.collide(player, voiture)){
            player.valeur = 1;
            player.visible = false;
            this.camera.follow(voiture, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.5);
          }
          break;
        }
      }
      case 1:
      {
        if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1))
        {
          this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.5);
          player.valeur = 0;
          player.x = voiture.x+60;
          player.y = voiture.y+20;
          player.visible = true;
          break;
        }
      }
    }
  }

  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
      switch (player.valeur) {
        case 0: {player.play('left');
                player.body.velocity.x = -100;
                break;}
        case 1:{ voiture.play('left');
            voiture.body.velocity.x = -200;
                break;}
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
      switch (player.valeur) {
        case 0: {player.play('right');
              player.body.velocity.x = 100;
                break;}
        case 1: {voiture.play('right');
              voiture.body.velocity.x = 200;
                break;}
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
      switch (player.valeur) {
        case 0: {player.play('up');
            player.body.velocity.y = -100;
                break;}
        case 1: {voiture.play('up');
            voiture.body.velocity.y = -200;
                break;}
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
      }

  }
  else
  {
    player.animations.stop();
    voiture.animations.stop();
  }
}
  return update;
});
