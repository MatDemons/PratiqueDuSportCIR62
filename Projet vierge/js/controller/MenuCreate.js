define([],
function(){
  var create = function(){
    // === fond d'écran ===
    this.stage.backgroundColor = '#182d3b';

    // === initialisation du background1 ===
    background1 = this.add.sprite(0,0,'background1');
    background1.scale.setTo(0.84,0.85);
	
	// === logo insert ===
	logo = this.add.sprite(400,125,'logo');

    // === initialisation du bouton start ===
    start = this.add.button(500-67, 350, 'start', actionOnClick, this);
    start.scale.setTo(0.5,0.5);
	}
	var actionOnClick = function(){
    this.state.start('select');
	}
  return create;
});
