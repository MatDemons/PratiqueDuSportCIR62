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
//=== je charge les different fichier de mon controller ===
require(['m/fM','c/fC','c/MP','c/MC','c/SP','c/SC','c/SU','c/GP','c/GC','c/GU','c/EC'],
function(fM,fC,MP,MC,SP,SC,SU,GP,GC,GU,EC){
   var footer = new fM();
   var footerview = new fC(footer, '#footer');
   var game = new Phaser.Game(1000, 450, Phaser.AUTO, 'jeux');
   game.state.add('menu',   { preload: MP ,create: MC  });
   game.state.add('select', { preload: SP ,create: SC,  update: SU  });
   game.state.add('game',   { preload: GP ,create: GC,  update: GU  });
   game.state.add('finish', { create: EC  });
   game.state.start('menu');
});
