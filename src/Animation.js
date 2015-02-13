var AnimationLayer = cc.Layer.extend({
	ctor : function(){
		//1. call super class's ctor function
		this._super();

		var size = cc.winSize;

		this.sprite = new cc.Sprite(res.Grass_jpg); //put ants and colonies in
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2
		});
		this.addChild(this.sprite, 0);		

	},

});
