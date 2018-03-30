define([],
function(){
  var create = function(){
  // === initialisation du background1 ===
  background1 = this.add.sprite(0,0,'background1');
  background1.scale.setTo(0.84,0.85);

	// === logo insert ===
	logo = this.add.sprite(1000/2-(1300*0.3)/2,-45,'logo');
  logo.scale.setTo(0.3,0.3);

  // === initialisation du bouton start ===
  Button = this.add.button(1000/2 - (550*0.5)/2, 450/2, 'Button', actionOnClick, this);
  Button.scale.setTo(0.5,0.5);
	}
	var actionOnClick = function(){
    this.state.start('select');
	}
  return create;
});
