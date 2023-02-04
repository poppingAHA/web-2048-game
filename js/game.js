//2048游戏的上下左右移动控制
document.onkeydown = function(ev){
	// console.log(ev.keyCode);

	switch(ev.keyCode){
		case 37: 	//左移
				moveLeft();
				getRandNumber();
				isGameOver();
				break;
		case 38: 	//上移
				moveUp();
				getRandNumber();
				isGameOver();
				break;
		case 39: 	//右移
				moveRight();
				getRandNumber();
				isGameOver();
				break;
		case 40: 	//下移
				moveDown();
				getRandNumber();
				isGameOver();
				break;
	}
}

//向左移动控制逻辑
function moveLeft(){
	if(canMoveLeft() == true){
		for(var i=0;i<4;i++){
			for(var j=1;j<4;j++){
				if (numberArr[i][j] !=0 ){ //numberArr[i][j]指的是当前的操作位置的数字
					for(var k=0;k<j;k++){
						if (numberArr[i][k]==0 && hasObstacleRow(i,k,j,numberArr)) {
							numberArr[i][k] = numberArr[i][j];
							numberArr[i][j] = 0;
							continue;
						}else if (numberArr[i][k]==numberArr[i][j] && hasObstacleRow(i,k,j,numberArr) && !hasConflicted[i][k]) {
							numberArr[i][k] += numberArr[i][j];
							score += numberArr[i][k];
							document.querySelector("#score").innerText = score;
							numberArr[i][j] =0;
							hasConflicted[i][k] = true;
							continue;
						}
					}
				}
			}
		}
		return true;
	}
	return false;
}

//向上移动操作逻辑
function moveUp(){
	if(canMoveUp() == true){
		for(var i=1; i<4; i++){
			for(var j=0; j<4; j++){
				if(numberArr[i][j] !=0 ){
					for(var k=0; k<i; k++){
						if(numberArr[k][j]==0 && hasObstacleCol(j,k,i,numberArr)){
							numberArr[k][j] = numberArr[i][j];
							numberArr[i][j] = 0;
							continue;
						}else if(numberArr[k][j]==numberArr[i][j] && hasObstacleCol(j,k,i,numberArr) && !hasConflicted[k][j]){
							numberArr[k][j] += numberArr[i][j];
							score += numberArr[k][j];
							document.querySelector("#score").innerText = score;
							numberArr[i][j] = 0;
							hasConflicted[k][j] = true;
							continue;
						}
					}
				}
			}
		}
	}
}

//向右移动操作逻辑
function moveRight(){
	 //判断是否能够向右移动
	 if(canMoveRight() == true){
	 	for(var i=0;i<4;i++){
	 		for(var j=2;j>=0;j--){
	 			if(numberArr[i][j] !=0 ){
	 				for(var k=3;k>j;k--){
	 					if(numberArr[i][k] == 0 && hasObstacleRow(i,j,k,numberArr)){
	 						numberArr[i][k] = numberArr[i][j];
	 						numberArr[i][j] = 0;
	 						continue;
	 					}else if(numberArr[i][k] == numberArr[i][j] && hasObstacleRow(i,j,k,numberArr) && !hasConflicted[i][k]){
	 						numberArr[i][k] += numberArr[i][j];
	 						score += numberArr[i][k];
	 						document.querySelector("#score").innerText = score;
	 						numberArr[i][j] =0;
	 						hasConflicted[i][k] = true;
	 						continue;
	 					}
	 				}
	 			}
	 		}
	 	}
	 	return true;
	 }
	 return false;
}

//向下移动操作逻辑
function moveDown(){
	if(canMoveDown()==true){
		for(var i=2; i>=0; i--){
			for(var j=0; j<4; j++){
				if(numberArr[i][j] !=0){
					for(var k=3; k>i; k--){
						if(numberArr[k][j] == 0 && hasObstacleCol(j,i,k,numberArr)){
							numberArr[k][j] = numberArr[i][j];
							numberArr[i][j] = 0;
							continue;
						}else if(numberArr[k][j] == numberArr[i][j] && hasObstacleCol(j,i,k,numberArr) && !hasConflicted[k][j]){
							numberArr[k][j] += numberArr[i][j];
							score += numberArr[k][j];
							document.querySelector("#score").innerText = score;
							numberArr[i][j] = 0;
							hasConflicted[k][j] = true;
							continue;
						}
					}
				}
			}
		}
	}
}

function isGameOver(){
	if(canMoveLeft() == false && canMoveRight() == false 
		&& canMoveUp() == false && canMoveDown() ==false
		&& hasEmptyPosition() == false){
		alert("Game over!\nYour score is "+ score);
	}
}

//判断是否能够左移
function canMoveLeft(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(numberArr[i][j-1] == 0 || numberArr[i][j-1] == numberArr[i][j]){
				return true;
			}
		}
	}
	return false;
}

//判断是否能够向右移动
function canMoveRight(){
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(numberArr[i][j+1] == 0 || numberArr[i][j+1] == numberArr[i][j]){
				return true;
			}
		}
	}
	return false;
}

//判断是否能够向上移动
function canMoveUp(){
	for(var i=1; i<4; i++){
		for(var j=0; j<4; j++){
			if(numberArr[i-1][j] ==0 || numberArr[i-1][j] == numberArr[i][j]){
				return true;
			}
		}
	}
	return false;
}

//判断是否能够向下移动
function canMoveDown(){
	for(var i=2; i>=0; i--){
		for(var j=0; j<4; j++){
			if(numberArr[i+1][j] == 0 || numberArr[i+1][j] == numberArr[i][j]){
				return true;
			}
		}
	}
	return false;
}