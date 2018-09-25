function start(){
	document.turn="X";
	setMessage(document.turn +"  Starts The Game");
}

function setMessage(msg){
	document.getElementById("message").innerHTML=msg;
}

function play(cell){
	if(checkWinner(document.turn)){
		setMessage(document.turn+" WON!!! Click Restart To Replay");
	}
	else if(checkDraw()){
		setMessage("GAME DRAW! Click Restart To Replay");
	}
	else if(cell.innerText==""){
		cell.innerText=document.turn;
		next();
	}
	else{
		setMessage("Pick a Vacant Cell")
	}
	
}

function next(){
	if(checkWinner(document.turn)){
		setMessage(document.turn+" WON!!! Click Restart To Replay");
	}
	else if(checkDraw()){
		setMessage("GAME DRAW! Click Restart To Replay");
	}
	else if(document.turn=="X"){
		document.turn="O";
		setMessage("It's "+document.turn+"'s Turn");
	}
	else{
		document.turn="X";
		setMessage("It's "+document.turn+"'s Turn");
	}
	
}

function getCell(id){
	return document.getElementById(id).innerHTML;
}

function checkRow(x,y,z,value){
	var row=false;
	if(getCell(x)==value && getCell(y)==value && getCell(z)==value){
		row=true;
	}
	return row;
}

function checkWinner(value){
	var winner=false;
	if(checkRow(1,2,3,value) || checkRow(4,5,6,value) || 
	checkRow(7,8,9,value) || checkRow(1,4,7,value) || 
	checkRow(2,5,8,value) || checkRow(3,6,9,value) || 
	checkRow(1,5,9,value) || checkRow(3,5,7,value)){
		winner=true;
	}
	return winner;
}

function checkDraw(){
	var i;
	var draw=true;
	for(i=1;i<10;i++){
		if(getCell(i)==""){
			draw=false;
			break;
		}
	}
	return draw;
}