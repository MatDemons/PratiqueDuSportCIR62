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
      player.cordonneX += 1;
    if(carte[player.cordonneX][player.cordonneY] != 1){
      player.cordonneX += 1;
      if(player.y > 50 && player.x > 100){
        x = -100;
        xA -= 1.65;
      }else
        xm += 2*1.65;
      player.play('left');
    }
      player.cordonneX -= 1;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    player.cordonneX -= 1;
    if(carte[player.cordonneX][player.cordonneY] != 1){
      player.cordonneX -= 1;
      if(player.x < 900 && player.y < 350){
        x = 100;
        xA += 1.65;
      }else
        xm -= 2*1.65;
      player.play('right');
    }
    player.cordonneX += 1;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.UP)){
      player.cordonneY += 1;
    if(carte[player.cordonneX][player.cordonneY] != 1){
      player.cordonneY += 1;
     if(player.x < 900 && player.y > 50){
       y = -100;
       yA -= 1.65;
     }else
       ym += 2*1.65;
     player.play('right');
    }
      player.cordonneY -= 1;
  }
  else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
    player.cordonneY -= 1;
    if(carte[player.cordonneX][player.cordonneY] != 1){
      player.cordonneY -= 1;
     if(player.x > 100 && player.y < 350){
       y = 100;
       yA = 1.65;
     }else
       ym -= 2*1.65;
     player.play('left');
    }
    player.cordonneY += 1;
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
