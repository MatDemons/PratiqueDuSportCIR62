define([''],
function(){
  var update = function(){
    player.body.velocity.set(0);
    this.physics.arcade.collide(player, Group);
    this.physics.arcade.collide(voiture,  Group);
    this.physics.arcade.collide(player, voiture);
  if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
      player.addChild(voiture);
      if(player.valeur == 0){
        player.valeur = 1;
      }
      else {
        player.valeur = 0;
      }
  }

  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
      player.body.velocity.x = -100;
      switch (player.valeur) {
        case 0: player.play('left');
          break;
        case 1: voiture.play('left');
          break;
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
      player.body.velocity.x = 100;
      switch (player.valeur) {
        case 0: player.play('right');
          break;
        case 1: voiture.play('right');
          break;
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
      player.body.velocity.y = -100;
      switch (player.valeur) {
        case 0: player.play('up');
          break;
        case 1: voiture.play('up');
          break;
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
      player.body.velocity.y = 100;
      switch (player.valeur) {
        case 0: player.play('down');
          break;
        case 1: voiture.play('down');
          break;
      }
  }
  else
  {
    player.animations.stop();
  }
}
  return update;
});
