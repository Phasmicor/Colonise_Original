var StatusLayer = cc.Layer.extend({
	ctor : function(){
		//1. call super class's ctor function
		this._super();

		var size = cc.winSize;

		this.sprite = new cc.Sprite(res.Grass_jpg); //put status text in
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2
		});
		this.addChild(this.sprite, 0);		

	},

});

var StatusLayer = cc.Layer.extend({
	labelYourAnts:null,
	labelEnemyAnts:null,
	YourAnts:0,
	EnemyAnts:0,

	ctor:function () {
		this._super();
		this.init();
	},

	init:function () {
		this._super();

		var winsize = cc.director.getWinSize();

		this.labelYourAnts = new cc.LabelTTF("Your Ants:0", "Helvetica", 20);
		this.labelYourAnts.setColor(cc.color(255,255,255));
		this.labelYourAnts.setPosition(cc.p(81, winsize.height - 15));
		this.addChild(this.labelYourAnts);
		
		this.labelEnemyAnts = new cc.LabelTTF("Enemy Ants:0", "Helvetica", 20);
		this.labelEnemyAnts.setColor(cc.color(255,255,255));
		this.labelEnemyAnts.setPosition(cc.p(70, winsize.height - 35));
		this.addChild(this.labelEnemyAnts);

	}
});