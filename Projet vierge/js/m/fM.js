define(['utils/Observable'], function(Observable) {

  var footerModel = function(){// on crée l'objet model
    Observable.call(this);
    this.data = ['DESMARESCAUX Matthieu',
                 'VERRIER Bastien',
                 'BOULANOUAR Mohamed',
                 'BRUGE Fabien',
                 'AIOUNE Nasreddine'];
  };

  footerModel.prototype = Object.create(Observable.prototype);
  footerModel.prototype.constructor = Observable;

  return footerModel;// on retourne le model

});
