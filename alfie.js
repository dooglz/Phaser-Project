<!doctype html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" />
    <title>Alfie Game</title>
	<script type="text/javascript" src="GAME/phaser.min.js"></script>
	<script type="text/javascript" src="GAME/boot.js"></script>
	<script type="text/javascript" src="GAME/preload.js"></script>
	<script type="text/javascript" src="GAME/game.js"></script>
    <style type="text/css">
        body {
            margin: 0;
        }
    </style>
</head>
<body>

<script type="text/javascript">

var Dreddgame = Dreddgame || {};

Dreddgame.game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

Dreddgame.game.state.add('Boot', Dreddgame.Boot);
Dreddgame.game.state.add('Preload', Dreddgame.Preload);
Dreddgame.game.state.add('Game', Dreddgame.Game);

Dreddgame.game.state.start('Boot');

//Dreddgame.Boot = function(){};


/*Dreddgame.Boot.prototype = {

	init: function() {
	
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	
	preload: function() {
	
		this.load.image('loading', 'img/loading.png');
	}
	
	create: function() {
	
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	this.state.start('Preload');
	
}
};

function preload() {

	//this.background = this.add.sprite(0, 0, 'loading');
	//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

	//game.preloadBar = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
	//game.preloadBar.anchor.setTo(0.5);
	
	//game.load.setPreloadSprite(game.preloadBar);

	
	
	
}


	var player;
	var platforms;
	var cursors;
	var weapon;
	var facingleft;
	var facingright;
	var currentframe;
	var left;

function create() {

	game.state.start('Game');

	
	smallDesert = game.add.sprite(-100, 0, 'desert');smallDesert.scale.setTo(0.8,0.8);
	
	platforms = game.add.group();
	
	platforms.enableBody = true;
	

	
	var ground = platforms.create(0, game.world.height - 50, 'ground');
	
	ground.scale.setTo(0.8,0.8);
	
	ground.body.immovable = true;
	
	
	player = game.add.sprite(0, 400, 'cowboy');
	//player.frame = 0;
	
	
	game.physics.arcade.enable(player);
	
	player.enableBody = true;
	
	player.body.bounce.y = 0.1;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
	
	player.animations.add('right', [1, 2, 3, 4, 5, 6, 7, 8, 9,], 10, true);
	player.animations.add('left', [15, 16, 17, 18, 19, 20, 21, 22, 23, 24,], 10, true);
	player.animations.add('stopright', [0], 1, true);
	player.animations.add('stopleft', [14], 1, true);
	player.animations.add('fireright', [11, 12, 13], 10, true);
	player.animations.add('fireleft', [25, 26, 27], 10, true);
	
	
	cursors = game.input.keyboard.createCursorKeys();
	
	fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
	
	weapon = game.add.weapon(1, 'bullet');
	
	weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
	
	weapon.fireRate = 100;
	
	weapon.trackSprite(player, 100, 75, false);
	
	//var left = new Phaser.Point(game.player.position.x - 10, game.position.y -20);
	
	//var right = new Phaser.Point(game.player.position.x + 10, game.position.y - 20);
	
	if (facingright = true)
	{
	
		weapon.fireAngle = Phaser.ANGLE_RIGHT
		
	}
	else
	{
	
		weapon.fireAngle = Phaser.ANGLE_LEFT
		
	}
	
	
}

function update() {

	game.physics.arcade.collide(player, platforms);
	
	//player.body.velocity.x = 0;
	



	
	if (cursors.left.isDown)
	{
		//left
		player.body.velocity.x = -100;
		
		player.animations.play('left');
		facingright = false;
		facingleft = true;
	}
	else if (cursors.right.isDown)
	{
		//right
		player.body.velocity.x = 100;
		
		player.animations.play('right');
		facingright = true;
		facingleft = false;
	}
	else 
	{
		//facingleft = true;
		player.body.velocity.x = 0;
		player.animations.stop();
		if ((facingright = true))
		{ 
			//stop
			player.frame = 0;
			facingright = true;
		
		}
		else if ((facingleft = true))
		{
	
			player.frame = 14;
			facingleft = true;
		
		
		}
		
	}
	
	
	
	
	if (fireButton.isDown && cursors.right.isDown)
	{
		
		
		//weapon.fire(right);
		//game.weapon.fireAngle = 90;
		
		player.animations.play('fireright');
	
	}
	else if (fireButton.isDown && cursors.left.isDown)
	{
		
		//game.weapon.fireAngle = -90;
		//weapon.fire(left);
		
		player.animations.play('fireleft');
		
	}
	else if (fireButton.isDown)
	{
	
		weapon.fire();
		
	}
	
	
}

//function fire();

*/
</script>

</body>
</html>