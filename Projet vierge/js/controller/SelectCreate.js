define([],
function(){
  etat = 1;
  var create = function(){
    this.stage.backgroundColor = '#0000FF';
    Perso1 = this.add.sprite(700,50,'Perso1');
    Perso1.scale.setTo(4, 4);
    Perso1.animations.add('walk');
    Perso1.animations.play('walk', 10, true);
    Perso1.visible = true;
    Perso2 = this.add.sprite(700,50,'Perso2');
    Perso2.scale.setTo(4, 4);
    Perso2.animations.add('walk');
    Perso2.animations.play('walk', 10, true);
    Perso1.visible = false;
    start = this.add.button(500-67, 350, 'start', actionOnClick, this);
    start.scale.setTo(0.5,0.5);
    boutonGauche = this.add.button(700,300,'start', action, this);
    boutonGauche.scale.setTo(0.2,0.2);
    boutonDroite = this.add.button(900,300,'start', action, this);
    boutonDroite.scale.setTo(0.2,0.2);
    this.add.text(100, 64, "Niveau Facile",  { font: "32px Arial", fill: '#ffffff', backgroundColor: 'rgba(0,255,0,0.25)' });

  }
	var actionOnClick = function(){
    this.state.start('this');
	}
  var action = function(){
    if(etat)
      etat = 0;
    else
      etat = 1;
  }
  return create;
});
