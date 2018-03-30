define([''],
function(){
  var update = function(){
    player.body.velocity.set(0);
    this.physics.arcade.collide(player, Group);

  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
      player.body.velocity.x = -100;
      player.play('left');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
      player.body.velocity.x = 100;
      player.play('right');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
      player.body.velocity.y = -100;
      player.play('up');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
      player.body.velocity.y = 100;
      player.play('down');
  }
  else
  {
    player.animations.stop();
  }
}
  return update;
});
