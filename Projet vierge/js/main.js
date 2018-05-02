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
require(['models/footerModel','controller/footerController','controller/MenuPreload','controller/MenuCreate','controller/SelectPreload','controller/SelectCreate','controller/SelectUpdate','controller/GamePreload','controller/GameCreate','controller/GameUpdate','controller/FinishPreload','controller/FinishCreate','controller/FinishUpdate'],// on définie les fichier
function(footerModel,footerController,MenuPreload,MenuCreate,SelectPreload,SelectCreate,SelectUpdate,GamePreload,GameCreate,GameUpdate,FinishPreload,FinishCreate,FinishUpdate){
   var footer = new footerModel();
   var footerview = new footerController(footer, '#footer');
   var game = new Phaser.Game(1000, 450, Phaser.AUTO, 'jeux');
   game.state.add('menu', {preload: MenuPreload,create: MenuCreate});
   game.state.add('select',{preload: SelectPreload,create : SelectCreate, update:SelectUpdate});
   game.state.add('game', {preload: GamePreload,create: GameCreate, update:GameUpdate});
   game.state.add('finish',{preload: FinishPreload,create: FinishCreate, update: FinishUpdate});
   game.state.start('menu');
});
