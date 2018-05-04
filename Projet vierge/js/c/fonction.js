define([''],
function(){
  var transport = function(T,reference,type,x,y,vitesse){
    var v = reference.add.sprite(x,y,type,1);
    reference.physics.enable(v, Phaser.Physics.ARCADE);
    v.vitesse = vitesse;
    switch (type) {
      case 'voiture':
        // === initialisation les different déplacement du voiture ===
        v.animations.add('up', [2], 0, true);   // je selection les different image du move avant
        v.animations.add('left', [4], 0, true); // .... du move gauche
        v.animations.add('down', [6], 0, true); // .... du move arrière
        v.animations.add('right', [7], 0, true);// ... du move droite
        break;
      case 'velo':
        v.scale.setTo(0.25,0.25);
        // === initialisation les different déplacement du velooo ===
        break;
      case 'bus':
        // === initialisation les different déplacement du Bus ===
        v.animations.add('up', [0], 0, true);   // je selection les different image du move avant
        v.animations.add('left', [2], 0, true); // .... du move gauche
        v.animations.add('down', [3], 0, true); // .... du move arrière
        v.animations.add('right', [1], 0, true);// ... du move droite
        break;
      default:
        // === initialisation les different déplacement du personnage ===
        v.animations.add('up', [0,1,2,3,4,5,6,7,8], 10, true); // je selection les different image du move avant
        v.animations.add('left', [9,10,11,12,13,14,15,16,17], 10, true); // .... du move gauche
        v.animations.add('down', [18,19,20,21,22,23,24,25,26], 10, true);// .... du move arrière
        v.animations.add('right', [27,28,29,30,31,32,33,34,35], 10, true); // ... du move droite
        break;
    }
    v.body.fixedRotation = true;
    v.bringToTop();
    T.push(v);
  }
  return transport;
});
