define([''],
function(){
  var update = function(){
      if(etat){
        Perso1.visible = true;
        Perso2.visible = false;
        Facile.visible = true;
        difficile.visible = false;
      }else{
        Perso1.visible = false;
        Perso2.visible = true;
        Facile.visible = false;
        difficile.visible = true;
      }
  	}
  return update;
});
