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
require(['models/footerModel','controller/footerController','controller/MenuPreload','controller/MenuCreate','controller/SelectPreload','controller/SelectCreate','controller/SelectUpdate','controller/GamePreload','controller/GameCreate'],// on définie les fichier
function(footerModel,footerController,MenuPreload,MenuCreate,SelectPreload,SelectCreate,SelectUpdate,GamePreload,GameCreate){
   var footer = new footerModel();
   var footerview = new footerController(footer, '#footer');
   var game = new Phaser.Game(1000, 450, Phaser.AUTO, 'jeux');
   game.state.add('menu', {preload: MenuPreload,create: MenuCreate});
   game.state.add('select',{preload: SelectPreload,create : SelectCreate, update:SelectUpdate});
   game.state.add('game', {preload: GamePreload,create: GameCreate});
   game.state.start('menu');
});
