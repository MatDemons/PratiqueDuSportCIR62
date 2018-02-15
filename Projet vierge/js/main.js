//=== configuration ===
require.config({
    baseUrl: 'js',
    paths: {
        templates:  '../templates',
        text:       'libs/text',
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
//=== Application lancé ! ===
require(['models/footerModel','controller/footerController'],// on définie les fichier
function(footerModel,footerController){
   var footer = new footerModel();
   var footerview = new footerController(footer, '#footer');
});
