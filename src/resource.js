var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
	Ant_png : "res/Art/ant.png",
	ColB_png : "res/Art/Colonyb.png",
	ColG_png : "res/Art/Colonyg.png",
	ColN_png : "res/Art/Colonyn.png",
	ColP_png : "res/Art/Colonyp.png",
	ColY_png : "res/Art/Colonyy.png",
	Grass_jpg : "res/Art/grass.jpg",
	Icon_png : "res/Art/icon.png",
	Loss_png : "res/Art/lossScreen.png",
	Victory_png : "res/Art/vicScreen.png",
	Win_png : "res/Art/WinScreen.png",
	Open_png : "res/Art/openScreen.png",
	L1_csv : "res/Levels/level1.json",
	L2_csv : "res/Levels/level2.json",
	L3_csv : "res/Levels/level3.json",
	L4_csv : "res/Levels/level4.json",
	L5_csv : "res/Levels/level5.json",
	L6_csv : "res/Levels/level6.json",
	L7_csv : "res/Levels/level7.json",
	L8_csv : "res/Levels/level8.json",
	L9_csv : "res/Levels/level9.json",
	BG_wav : "res/Sounds/background.wav",
	BaseAlert_wav : "res/Sounds/base alert.wav",
	BaseHit_wav : "res/Sounds/base hit.wav",
	BaseRegen_wav : "res/Sounds/base regen.wav",
	BaseTaken_wav : "res/Sounds/base taken.wav",
	Lost_wav : "res/Sounds/lost.wav",
	Won_wav : "res/Sounds/won.wav",
	Theme_wav : "res/Sounds/theme.wav"
	
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}