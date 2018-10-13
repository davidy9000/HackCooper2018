
var game = new Phaser.Game(globalConfig.w, globalConfig.h, Phaser[globalConfig.mode], "");

var bootstrap = {

  init: function() {
    if (!(globalConfig.scaleMode == "EXACT_FIT")){
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
    }    
    game.scale.scaleMode = Phaser.ScaleManager[globalConfig.scaleMode];
    game.scale.refresh();
  },

  preload: function () {
    game.load.image('splash',  globalConfig.splash.loadingScreen);
    if (globalConfig.splash.loadingBar) {
      game.load.image('loading',  globalConfig.splash.loadingBar.fullBar);
    }    
    game.load.script('preload',  'RenJS/Preload.js');
  },

  create: function () {
    game.state.add('preload', preload);
    game.state.start('preload');
  }

};

game.state.add('bootstrap', bootstrap);
game.state.start('bootstrap');