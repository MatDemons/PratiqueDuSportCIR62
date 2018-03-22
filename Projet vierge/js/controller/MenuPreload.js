define([''],
function(){
  var preload = function(){
      // === Chargement ===
      this.load.image('logo','img/logo.png');
      this.load.image('start', 'img/start.png');

      // === Variable ===
  		var logo; // variable du logo.
      var start; // variable du bouton start.
  	}
  return preload;
});
