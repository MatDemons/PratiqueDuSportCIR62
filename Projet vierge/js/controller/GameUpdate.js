define([''],
function(){
  var update = function(){
  player.body.velocity.set(0);
  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
      if(afficher.x > 100){
        player.body.velocity.x = -100;
        afficher.x -= 1.65;
        player.play('left');
      }else if(img1.x < 1000){
        img1.x +=1.65;
        player.play('left');
      }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    if(afficher.x < 900){
      player.body.velocity.x = +100;
      afficher.x += 1.65;
      player.play('right');
    }else if(img1.x > -2000){
      img1.x -=1.65;
      player.play('right');
    }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){
    if(afficher.y > 100){
     player.body.velocity.y = -100;
     afficher.y -= 1.65;
     player.play('up');
   }else if(img1.y < 1000){
     img1.y += 1.65;
     player.play('up');
   }
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    if(afficher.y < 350){
     player.body.velocity.y = +100;
     afficher.y += 1.65;
     player.play('down');
   }else if(img1.y > -2000){
     img1.y -= 1.65;
     player.play('down');
   }
  }
  else
  {
    //afficher.animations.stop();
    player.animations.stop();
  }
}
  return update;
});
