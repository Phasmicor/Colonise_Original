var AnimationLayer = cc.Layer.extend({
	ctor : function(){
		//1. call super class's ctor function
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		
		//Load level data (I can't figure out how to iterate through the different res objects - like res.L1, res.L2 

		var level = 1 //have to do it this way instead...
		
		cc.loader.loadJson("res/Levels/level" + level + ".json", function(error, data){ //load json file for level - level[0].Y = 361
			var info = JSON.stringify(data); // [{"Y": "361", "X": "61", "type": "def", "number": "0", "team": "0"},
			cc.log(info);
		});		

	},

});
