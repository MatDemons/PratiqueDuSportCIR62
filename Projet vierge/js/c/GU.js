define([''],
function(){
  var update = function(){
    for(var v of T){
      v.body.velocity.set(0);
      this.physics.arcade.collide(v, Group);
    }
    for(var v of T){
      if(v.name == 'bus' && v == player){
        if(v.x <= v.debutx - 100)
          v.sens = 0;
        else if(v.y <= v.debuty - 100)
          v.sens = 1;
        else if(v.x >= v.debutx + 200)
          v.sens = 2;
        else if(v.y >= v.debuty + 200)
          v.sens = 3;
        if(v.sens == 0){
          v.play('up');
          v.body.velocity.x = v.vitesse/2;
          v.body.velocity.y = -v.vitesse/2;
        }
        else if(v.sens == 1){
          v.play('right');
          v.body.velocity.y = v.vitesse/2;
          v.body.velocity.x = v.vitesse/2;
        }
        else if(v.sens == 2){
          v.play('down');
          v.body.velocity.x = -v.vitesse/2;
          v.body.velocity.y =  v.vitesse/2;
        }
        else{
          v.play('left');
          v.body.velocity.y = -v.vitesse/2;
          v.body.velocity.x = -v.vitesse/2;
        }
      }
    }
  if (this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).downDuration(1)){
    var test = 0;
    for(var v of T){
      if(this.physics.arcade.collide(v, player) && v != T[0]){
        player = v;
        test = 1
        T[0].visible = false;
        this.camera.follow(v, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        break;
      }
    }
    if(test == 0){
      T[0].visible = true;
      let x = player.x;
      let y = player.y;
      player = T[0];
      player.x = x;
      player.y = y;
      player.visible = true;
    }
  }
if(player.name != "bus"){
  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){//On regarde si on appuiye sur la fleche de gauche
    player.play('left');
    player.body.velocity.y = -player.vitesse/2;
    player.body.velocity.x = -player.vitesse/2;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){//...fleche droit
    player.play('right');
    player.body.velocity.y = player.vitesse/2;
    player.body.velocity.x = player.vitesse/2;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){//...fleche Haut
    player.play('up');
    player.body.velocity.x = player.vitesse/2;
    player.body.velocity.y = -player.vitesse/2;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){//...fleche bas
    player.play('down');
    player.body.velocity.x = -player.vitesse/2;
    player.body.velocity.y = player.vitesse/2;
  }
  else
  {
    for(v of T){
      if(v.name != 'bus')
        v.animations.stop();
    }
  }
}
  if(player.x >= player.fx && player.y >= player.fy && player.x <= player.fx+280 && player.y <= player.fy+138)// a définir
    this.state.start('finish');
  }
  return update;
});
