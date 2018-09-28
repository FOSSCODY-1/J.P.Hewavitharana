
//function to start game

function start(){
	
	document.turn="X";
	setMessage(document.turn +"  Starts The Game");
}


//function to set a messege in #message

function setMessage(msg){
	
	document.getElementById("message").innerHTML=msg;
}



//function for 2 player gameplay

function play(cell){
	
	//check if there is a winner before each turn
	if(checkWinner(document.turn)){ 
	
		setMessage(document.turn+" WON!!! Click Restart To Replay");
	}
	
	//check if the game is a draw before each turn
	else if(checkDraw()){ 
	
		setMessage("GAME DRAW! Click Restart To Replay");
	}
	
	//when the player picks a cell, mark it with their mark 'X' or 'O'
	else if(cell.innerText==""){
		
		cell.innerText=document.turn;
		next();
	}
	
	//if the player picks a previously picked cell, set a message
	else{
		
		setMessage("Pick a Vacant Cell")
	}
	
}



//function to determine the next player

function next(){
	
	//check if there is a winner before each turn
	if(checkWinner(document.turn)){
		
		setMessage(document.turn+" WON!!! Click Restart To Replay");
	}
	
	//check if the game is a draw before each turn
	else if(checkDraw()){
		
		setMessage("GAME DRAW! Click Restart To Replay");
	}
	
	//switch the turn 
	else if(document.turn=="X"){
		
		document.turn="O";
		setMessage("It's "+document.turn+"'s Turn");
	}
	
	//switch the turn
	else{
		
		document.turn="X";
		setMessage("It's "+document.turn+"'s Turn");
	}
	
}



//function to get the mark ('X' or 'O') of a particular cell

function getCell(id){
	
	return document.getElementById(id).innerHTML;
}



//function to check the marks of a row/column/diagonal 

function checkRow(x,y,z,value){
	
	var row=false;
	
	//if the mark in all three boxes are the same, return true
	
	if(getCell(x)==value && getCell(y)==value && getCell(z)==value){
		
		row=true;
	}
	
	return row;
}



//function to check winner

function checkWinner(value){
	
	var winner=false;
	
	//if the mark is same in any of the winning combinations, return true
	
	if(checkRow(1,2,3,value) || checkRow(4,5,6,value) || 
	checkRow(7,8,9,value) || checkRow(1,4,7,value) || 
	checkRow(2,5,8,value) || checkRow(3,6,9,value) || 
	checkRow(1,5,9,value) || checkRow(3,5,7,value)){
		
		winner=true;
	}
	
	return winner;
}



//function to check whether the game is a draw

function checkDraw(){
	
	var i;
	var draw=true;
	
	//if any of the cells are blank, return false
	for(i=1;i<10;i++){
		
		if(getCell(i)==""){
			
			draw=false;
			break;
		}
	}
	return draw;
}