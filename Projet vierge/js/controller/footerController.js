define(['text!templates/footer.TPL', 'handlebars', 'jquery'],
function(footer, Handlebars, $) {

    var footerController = function(model, selector) {// on crée le Controller
      this._element = $(selector);
      this._model = model;
      this._template = Handlebars.compile(footer);
      this.render(); // on affiche sur le site
    };

    // Generate les templates
    footerController.prototype.render = function() { 
      var htmlContent = this._template(this._model);
      this._element.html(htmlContent);
    };

    return footerController;
});
