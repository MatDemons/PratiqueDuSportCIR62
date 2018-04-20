define([],
function(){
  var create = function(){
  // === initialisation du background1 ===
  background1 = this.add.sprite(0,0,'background1');
  background1.scale.setTo(0.84,0.85);

	// === logo insert ===
	logo = this.add.sprite(1000/2-(1989*0.2)/2,-45,'logo');
  logo.scale.setTo(0.2,0.2);

  // === initialisation du bouton start ===
  Button = this.add.button(1000/2 - (280*0.5)/2, 300, 'Button', actionOnClick, this);
  Button.scale.setTo(0.5,0.5);
	}
	var actionOnClick = function(){
    this.state.start('select');
	}
  return create;
});
