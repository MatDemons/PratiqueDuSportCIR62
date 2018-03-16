define([''],
function(){
  var update = function(){
      if(etat){
        Perso1.visible = false;
        Perso2.visible = true;
      }else{
        Perso1.visible = true;
        Perso2.visible = false;
      }
  	}
  return update;
});
