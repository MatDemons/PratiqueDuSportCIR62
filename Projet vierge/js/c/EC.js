define([],
function(){
  var create = function(){
  // === initialisation du background1 ===
  background1 = this.add.sprite(0,0,'background1');
  background1.scale.setTo(0.84,0.85);

	 generique_fin = this.add.sprite((1000/2)-(1280*0.5)/2,(450/2)-(720*0.5)/2,'generique_fin');
   generique_fin.scale.setTo(0.5,0.5);

  // === initialisation du bouton start ===
  Button = this.add.button(790,20, 'close_win', actionOnClick, this);
  Button.scale.setTo(0.1,0.1);
	}
	var actionOnClick = function(){
    this.state.start('select');
	}
  return create;
});
