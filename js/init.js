//用二维数组存储游戏数据
var numberArr = new Array();
var score=0;//存储游戏分数
var hasConflicted = new Array();//判断每个格子是否已经发生过碰撞

window.onload = function(){
	document.querySelector("#score").innerText=0;

	var grid_container = document.querySelector("#grid_container");
	// console.log(grid_container);

	//开始新游戏
	newgame();

	var newgamebutton = document.querySelector('#newgamebutton');
	// console.log(newgamebutton);
	//点击newgamebutton按钮时开始新游戏
	newgamebutton.onclick = function(){
		score=0;
		document.querySelector("#score").innerText=0;
		newgame();
	}


}

//开始新游戏函数
function newgame(){
	score=0;
	//清空棋盘区域所有元素
	removeAll();

	//初始化棋盘格
	initGridCell();
	
	//初始化数字格
	initNumberCell();

	//显示数字
	showNumber();

	//在数字格的随机位置生成两个随机数字
	getRandNumber();
	getRandNumber();

}

//清空棋盘区域所有元素
function removeAll(){
	while(grid_container.hasChildNodes()==true){
		grid_container.removeChild(grid_container.firstChild);
	}
}

//初始化棋盘格
function initGridCell(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var grid_cell = document.createElement('div');
			grid_cell.setAttribute('class','grid_cell');
			grid_container.appendChild(grid_cell);
			grid_cell.style.left = 20+120*j+'px';
			grid_cell.style.top = 20+120*i+'px';
		}
	}	
}

//初始化数字格
function initNumberCell(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var number_cell = document.createElement('div');
			number_cell.setAttribute('class','number_cell');
			number_cell.setAttribute('id','number_cell-'+i+'-'+j);
			grid_container.appendChild(number_cell);
			number_cell.style.left = 20+120*j+'px';
			number_cell.style.top = 20+120*i+'px';
			// number_cell.innerText = 0;
		}
	}	

	//游戏刚开始时，所有数据为0
	for(var i=0;i<4;i++){
		numberArr[i] = new Array();
		hasConflicted[i] = new Array();
		for(var j=0;j<4;j++){
			numberArr[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}
}

//在数字格上显示数字
function showNumber(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var number_cell = document.querySelector('#number_cell-'+i+'-'+j);
			// console.log(number_cell);
			if(numberArr[i][j]==0){
				number_cell.style.display = 'none';
			}else{
				number_cell.innerText = numberArr[i][j];
				number_cell.style.display = 'block';
				number_cell.style.background = setBgColor(numberArr[i][j]);
				number_cell.style.color = setColor(numberArr[i][j]);
				if (numberArr[i][j]>=1024) {
					number_cell.style.fontSize = '42px';
				}else{
					number_cell.style.fontSize = '54px';
				}
			}
			hasConflicted[i][j] = false;
		}
	}
}

//在随机位置生成随机数字
function getRandNumber() {
	if(hasEmptyPosition()){
		//生成随机位置的坐标
		var randx = Math.floor(Math.random()*4);
		var randy = Math.floor(Math.random()*4);

		while(true){
			if (numberArr[randx][randy]==0) {
				break;
			}else{
				var randx = Math.floor(Math.random()*4);
				var randy = Math.floor(Math.random()*4);
			}
		}

		//生成随机数字2，4
		var randNumber = Math.random()<0.5?2:4;
		numberArr[randx][randy] = randNumber;
		// console.log(randx,randy,randNumber);
		showNumber();
	}
}