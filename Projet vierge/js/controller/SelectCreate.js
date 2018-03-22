define([],
function(){
  etat = 1;
  var create = function(){

    // === Bouton ===
    input = this.add.inputField(115, 200,{
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: 'pseudo',
  });
    // === initialisation du Perso1 ===
    Perso1 = this.add.sprite(730,125,'Perso1');
    Perso1.scale.setTo(3, 3);
    Perso1.animations.add('walk');
    Perso1.animations.play('walk', 10, true);

    // === initialisation du Perso2 ===
    Perso2 = this.add.sprite(730,125,'Perso2');
    Perso2.scale.setTo(3, 3);
    Perso2.animations.add('walk');
    Perso2.animations.play('walk', 10, true);

    // === initialisation de la fleche Gauche et droite ===
    boutonGauche = this.add.button(700,300,'gauche', action, this);
    boutonGauche.scale.setTo(0.05,0.05);
    boutonDroite = this.add.button(900,300,'droite', action, this);
    boutonDroite.scale.setTo(0.05,0.05);

    // === initialisation des different Text ===
    this.add.text(200,100,input.value,{font: "32px Arial"});
    Titre = this.add.text(100, 150, "Votre pseudo :",  { font: "32px Arial"});
    Facile = this.add.text(730, 350, "Niveau Facile",  { font: "32px Arial"});
    difficile = this.add.text(730, 350, "Niveau Difficile",  { font: "32px Arial"});

    // === initialisation du logo ===
    logo = this.add.sprite(500-156,50,'logo');
    logo.scale.setTo(0.5,0.5);

    // === initialisation du Bouton ===
    start = this.add.button(500-67, 350, 'start', actionOnClick, this);
    start.scale.setTo(0.5,0.5);
    etat = 'Perso1';

  }
	var actionOnClick = function(){
    if(input.value != '')
      this.state.start('game');
	}
  var action = function(){
    if(etat == 'Perso1')
      etat = 'Perso2';
    else
      etat = 'Perso1';
    console.log(etat)
  }
  return create;
});
