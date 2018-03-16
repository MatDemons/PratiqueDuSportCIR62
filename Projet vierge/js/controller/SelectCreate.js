define([],
function(){
  etat = 1;
  var create = function(){
    this.stage.backgroundColor = '#182d3b';
    Perso1 = this.add.sprite(730,125,'Perso1');
    Perso1.scale.setTo(3, 3);
    Perso1.animations.add('walk');
    Perso1.animations.play('walk', 10, true);
    Perso2 = this.add.sprite(730,125,'Perso2');
    Perso2.scale.setTo(3, 3);
    Perso2.animations.add('walk');
    Perso2.animations.play('walk', 10, true);
    start = this.add.button(500-67, 350, 'start', actionOnClick, this);
    start.scale.setTo(0.5,0.5);
    boutonGauche = this.add.button(700,300,'gauche', action, this);
    boutonGauche.scale.setTo(0.05,0.05);
    boutonDroite = this.add.button(900,300,'droite', action, this);
    boutonDroite.scale.setTo(0.05,0.05);
    Facile = this.add.text(730, 350, "Niveau Facile",  { font: "32px Arial"});
    difficile = this.add.text(730, 350, "Niveau Difficile",  { font: "32px Arial"});
  }
	var actionOnClick = function(){
    this.state.start('game');
	}
  var action = function(){
    if(etat)
      etat = 0;
    else
      etat = 1;
  }
  return create;
});
