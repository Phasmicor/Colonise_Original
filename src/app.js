var MenuLayer = cc.Layer.extend({
	sprite:null,
	ctor:function(){
		//1. call super class's ctor function
		this._super();

		//2. get the screen size of your game canvas
		var size = cc.winSize;

		//3. calculate the center point

		//4. create a background image and set it's position at the center of the screen
		
		this.sprite = new cc.Sprite(res.Open_png);
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2
		});
		this.addChild(this.sprite, 0);
		

		//return true;
	}
});

var MenuScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new MenuLayer();
		layer.init();
		this.addChild(layer);
	}
});

var GameLayer = cc.Layer.extend({
	ctor : function(){
		//1. call super class's ctor function
		this._super();

		var size = cc.winSize;
		
		
		
	},

});

var GameScene = cc.Scene.extend({//create the scene and start the game
	onEnter:function () {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});


