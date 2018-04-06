define([''],
function(){
  var update = function(){
    player.body.velocity.set(0);
    voiture.body.velocity.set(0);
    this.physics.arcade.collide(player, Group);
    this.physics.arcade.collide(voiture,  Group);
    //this.physics.arcade.collide(player, voiture);
  if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
    switch (player.valeur) {
      case 0:
      {
        if(this.physics.arcade.collide(player, voiture)){
          player.valeur = 1;
          player.visible = false;
        }
        break;
      }
      case 1:
      {
        player.valeur = 0;
        player.visible = true;
        break;
      }
    }
  }

  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
      switch (player.valeur) {
        case 0: {player.play('left');
                break;}
        case 1:{ voiture.play('left');
            voiture.body.velocity.x = -100;
                break;}
      }
      player.body.velocity.x = -100;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
      switch (player.valeur) {
        case 0: {player.play('right');
                break;}
        case 1: {voiture.play('right');
              voiture.body.velocity.x = 100;
                break;}
      }
      player.body.velocity.x = 100;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
      switch (player.valeur) {
        case 0: {player.play('up');
                break;}
        case 1: {voiture.play('up');
            voiture.body.velocity.y = -100;
                break;}
      }
      player.body.velocity.y = -100;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
      switch (player.valeur) {
        case 0: {
          player.play('down');
          break;
        }
        case 1:{
          voiture.play('down');
          voiture.body.velocity.y = 100;
          break;
        }
      }
          player.body.velocity.y = 100;

  }
  else
  {
    player.animations.stop();
    voiture.animations.stop();
  }
}
  return update;
});
