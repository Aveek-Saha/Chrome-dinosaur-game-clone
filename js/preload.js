var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('box', 'assets/box.png');
		
		this.game.load.spritesheet('player', 'assets/player.png', 24, 24, 9, -2);
		

	},

	create: function(){
		this.game.state.start("Main");
	}
}