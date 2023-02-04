//设置数字格背景颜色
function setBgColor(number){
	switch(number){
		case 2:   return "#eee4da";break;
	    case 4:   return "#ede0c8";break;
	    case 8:   return "#f2b179";break;
	    case 16:   return "#f59563";break;
	    case 32:   return "#f67c5f";break;
	    case 64:   return "#f65e3b";break;
	    case 128:   return "#edcf72";break;
	    case 256:   return "#edcc61";break;
	    case 512:   return "#9c0";break;
	    case 1024:   return "#33b5e5";break;
	    case 2048:   return "#09c";break;
	    case 4096:   return "#a6c";break;
	    case 8192:   return "#93c";break;
	}
}

//设置数字格的字体颜色
function setColor(number){
	if(number <= 4){
		return "#776e65";
	}else{
		return "#FFF";
	}
}

//判断数字格中是否存在空位置
function hasEmptyPosition() {
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if (numberArr[i][j]==0) {
				return true;
			}
		}
	}
	return false;
}


//判断行方向上是否存在障碍物
function hasObstacleRow(row,col1,col2,numberArr){
	for(var i=col1+1; i<col2; i++){
		if(numberArr[row][i] != 0 ){
			return false;
		}
	}
	return true;
}

//判断列方向上是否存在障碍物
function hasObstacleCol(col,row1,row2,numberArr){
	for(var i=row1+1; i<row2; i++){
		if(numberArr[i][col] !=0){
			return false;
		}
	}
	return true;
}