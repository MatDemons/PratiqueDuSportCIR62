define([''],
function(){
  var update = function(){
    var x = 0;
    var y = 0;
    var xm = 0;
    var ym = 0;
  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
    if(carte[Math.ceil(player.x/65 -1)][Math.ceil(player.y/65)] != 1){//On verifie si le joeur est toujour dans la casse
      x -= 1;
      player.play('left');
    }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
    if(carte[Math.ceil(player.x/65 + 1)][Math.ceil(player.y/65)] != 1){
      x += 1;
      player.play('right');
    }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
    if(carte[Math.ceil(player.x/65)][Math.ceil(player.y/65 - 1)] != 1){
      y -= 1;
      player.play('up');
    }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
    if(carte[Math.ceil(player.x/65)][Math.ceil(player.y/65 + 1)] != 1){
      y += 1;
      player.play('down');
    }
  }
  else
  {
    player.animations.stop();
  }
  player.x += x //+= x - y;
  player.y += y //+= x/2 + y/2;
  afficher.x += x//x - y;
  afficher.y += y//(x + y)/2;
  console.log(Math.ceil(player.x/65));
  console.log(Math.ceil(player.y/65));
}
  return update;
});
