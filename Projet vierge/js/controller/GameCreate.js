define([],
function(){
  var create = function(){
    this.stage.backgroundColor = '#000000';
    let img1 = this.add.sprite(-1540,-1500,'background');
    img1.scale.setTo(4.5,3.5);
	}
  return create;
});
