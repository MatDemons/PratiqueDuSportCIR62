define([''],
function(){
  var update = function(){
    var x = 0;
    var y = 0;
    var xA = 0;
    var yA = 0;
    var xm = 0;
    var ym = 0;
  if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      if(!img1.x > -1280/2){
        x = -100;
        xA -= 1.65;
      }else
        xm += 2*1.65;
      player.play('left');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      if(!img1.x < 1280/2){
        x = 100;
        xA += 1.65;
      }else
        xm -= 2*1.65;
      player.play('right');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){
     if(!img1.y > -960/2){
       y = -100;
       yA -= 1.65;
     }else
       ym += 2*1.65;
     player.play('up');
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
     if(!img1.y < 960/2){
       y = 100;
       yA = 1.65;
     }else
       ym -= 2*1.65;
     player.play('down');
  }
  else
  {
    afficher.animations.stop();
    player.animations.stop();
  }
  player.body.velocity.set(0);
  player.body.velocity.x = x - y;
  player.body.velocity.y = x/2 + y/2;
  afficher.x += xA - yA;
  afficher.y += (xA + yA)/2;
  img1.x += xm - ym;
  img1.y +=( xm + ym )/2;
}
  return update;
});
