//主流程控制
//将 goto 攻击 back 整合到一个定时器里
var timer=null;
function mainConttroller(mainFlow){
	if(timer) return;
	console.log("FCM TEST!");
	var i=0;
	timer=setInterval(function(){
		//console.log('i:'+i++);
		if(i<=30&&i%5==0){
			console.log("step 1:"+i+" goto");
		}
		if(i>30&&i<=60&&i%10==0){
			console.log("step 2:"+i+" attack");
		}
		if(i>60&&i<=90&&i%2==0){
			console.log("step 3:"+i+" back");
		}
		
		i++;
	},100);
	
}

//对白播放 一次性播放 需要设置时间间隔
function dialoguePlay(dialogue,replayOrNot){
	for(e in dialogue){
		console.log(dialogue[e].name);
		console.log(dialogue[e].message);
		console.log(dialogue[e].img);
	}
}

//对白播放 单击一次 播放一句 顺序播放
var dialogueIndex=0;
function dialoguePlayByClick(dialogue,replayOrNot){
	console.log(dialogue[dialogueIndex].name);
	console.log(dialogue[dialogueIndex].message);
	console.log(dialogue[dialogueIndex].img);
	dialogueIndex++;
	if(dialogueIndex>=dialogue.length)dialogueIndex=0;
}

//Test 部分
window.onload=function(){
	var obtn=document.getElementById('btn');
	
	//success
	//这个是测试 goto-攻击-back 整合到一个定时器的test
	/*
	obtn.onclick=function(){
		mainConttroller("1212");
	}
	*/
	
	//name 人物名 message 对白内容 img 人物头像路径
	var dialogueOne =[
		{
			name:'张三',
			message:'今天天气不错',
			img:'1.png'
		},
		{
			name:'李四',
			message:'真是好啊',
			img:'2.png'
		},
		{
			name:'张三',
			message:'去哪玩',
			img:'1.png'
		},
	]
	
	//success
	//这个是一次播放全部对白的方法 暂时不用
	/*
	obtn.onclick=function(){
		dialoguePlay(dialogueOne,false);
	}
	*/
	
	obtn.onclick=function(){
		dialoguePlayByClick(dialogueOne,false);
	}
}
