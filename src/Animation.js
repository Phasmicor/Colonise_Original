var AnimationLayer = cc.Layer.extend({
	ctor : function(){
		//1. call super class's ctor function
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		
		

		cc.loader.loadJson(res.L1, function(error, data){
			cc.log(data); //data is the json object
		});		

	},

});
