var dialogueUse =[
	{
		name:'btn1',
		message:'hello  pls talk to btn2',
		img:'cvzvcvwewq'
	},
	{
		name:'btn2',
		message:'stupid back to btn1',
		img:'fdsfsdfsdf'
	},
	{
		name:'btn1',
		message:'what not btn2? oh i know its btn3',
		img:'123131313'
	},
	{
		name:'btn3',
		message:'haha u finally find me,back to btn1 again',
		img:'fdsfsdfsdfafsdfafa'
	},
	{
		name:'btn1',
		message:'u finish the task!congartulation',
		img:'fdsfsdfsdfafsdfafa'
	}
]

var btn1Now="Nice day";
var btn2Now="good boy";
var btn3Now="bad child";

window.onload=function(){
	/*
	var obtn1=document.getElementById('btn1');
	var obtn2=document.getElementById('btn2');
	var obtn3=document.getElementById('btn3');
	*/
	var roles=document.getElementsByClassName("role");
	console.log(roles);
	for(e in roles){
		roles[e].onclick=function(){
			//console.log(this.id);
			say(this.id);
		}
	}
}

var folwNum=0;
function say(BtnID){
	if(folwNum>=dialogueUse.length){
		//replay btnnow
		console.log(getBtnNow(BtnID));
		return;
	}
	if(BtnID==dialogueUse[folwNum].name){
		//print
		console.log(dialogueUse[folwNum].message);
		//set
		setBtnNow(BtnID,dialogueUse[folwNum].message)
		folwNum++
	}else{
		//get
		console.log(getBtnNow(BtnID));
	}
}

var btnNow={
	btn1:'Nice day',
	btn2:'good boy',
	btn3:'bad child',
}

function getBtnNow(BtnID){
	var btnNowTemp;
	switch(BtnID){
		case "btn1": btnNowTemp=btnNow.btn1;break;
		case "btn2": btnNowTemp=btnNow.btn2;break;
		case "btn3": btnNowTemp=btnNow.btn3;break;
	}
	return btnNowTemp;
}

function setBtnNow(BtnID,message){
	switch(BtnID){
		case "btn1": btnNow.btn1=message;break;
		case "btn2": btnNow.btn2=message;break;
		case "btn3": btnNow.btn3=message;break;
	}
}

/*
function getBtnNow(BtnID){
	var btnNow;
	switch(BtnID){
		case "btn1": btnNow="Nice day";break;
		case "btn2": btnNow="good boy";break;
		case "btn3": btnNow="bad child";break;
	}
	return btnNow;
}
*/