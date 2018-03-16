define([],
function(){
  var create = function(){
    this.stage.backgroundColor = '#182d3b';
    logo = this.add.sprite(500-156,50,'logo');
    start = this.add.button(500-67, 350, 'start', actionOnClick, this);
    logo.scale.setTo(0.5,0.5);
    start.scale.setTo(0.5,0.5);
	}
	var actionOnClick = function(){
    this.state.start('select');
	}
  return create;
});
