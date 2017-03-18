const prompt = require('prompt-sync')();

var playerTurn = "x";

var players = {
    "x":{
        isAi : false,
        AiLevel : 1,
        moveGenerator: getHumanMove
    },
    "o":{
        isAi:false,
        AiLevel : 1,
        moveGenerator: getHumanMove
    }
};

var numPlayers;
while (true){
    numPlayers = prompt("enter number of players 0 for ai vs ai 1 for you vs ai 2 for player vs player");
    numPlayers = Number(numPlayers);
    if (numPlayers >= 0 &&
        numPlayers  <= 2) {
        break;
    }
    console.log("u $uk @ lot dud")
}

if (numPlayers === 1) {
    var humanIsX;
    while (true) {
        humanIsX = prompt("are you x y/n ");
        if (humanIsX === "y") {
            
            humanIsX = true;
            break;
        }
        if (humanIsX === "n"){
            humanIsX = false;
            break;
        }
        console.log("u $uk @ l0t dud");
    }
    if (humanIsX) {
        players["o"].isAi = true;
        players["o"].AiLevel = getAiLevel["o"];
        players["o"].moveGenerator = level1AiGetMove;

    } else {
        players["x"].isAI = true;
        players["x"].AiLevel = getAiLevel["o"];
        players["x"].moveGenerator = level1AiGetMove;
    }
}
if (numPlayers === 0){
    players["x"].isAi = true;
    players["x"].AiLevel = getAiLevel["o"];
    players["x"].moveGenerator = level1AiGetMove;

    players["o"].isAI = true;
    players["o"].AiLevel = getAiLevel["o"];
    players["o"].moveGenerator = level1AiGetMove;
}

console.log("hello user this is tic tac toe the other person is going to kick your butt. type q to exit");

var board = [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " " ]];

//GGGGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAAAAAAAMMMMMMMMMMMMMEEEEEEEEEEEEEEEEEE LLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPPPPPPPPPP
while (true) {
    console.log(`${playerTurn} turn`);
    var rc = players[playerTurn].moveGenerator();
    var row = rc[0];
    var col = rc[1];
   
    console.log(`${row},${col}`);
    board[row][col] = playerTurn;
    drawboard(board);
    var win = checkWin(board);
    if (win !== null){
        if(win === "stalemate"){
            console.log("stalemate! u suk a lot dud");
        } else {
            console.log(`${win} won`)
        }
        process.exit(0);
    }

    if (playerTurn === "o"){
        playerTurn = "x";
    } else {
        playerTurn= "o";
    }
}

function level1AiGetMove() {
    //genorate a random
    for (var row = 0; row <3; row++) {
        for (var col = 0; col <3; col++) {
            if (board[row][col] === " "){
                return [row, col];
            }
        }
    }
    return [0,0];
}

function getAiLevel(player){
    var level;
    while (true){
        level = prompt(`what level for AI ${player}?`);
        level = Number(level);
        if (level >= 1&&
            level <= 2){
            return level;

        }
        console.log("u $uk @ lot dud");
    }
}

function checkWin(b) {
    if (checkCompleteRow(b, 0, "x") ||
        checkCompleteRow(b, 1, "x") ||
        checkCompleteRow(b, 2, "x")) {
        return "x";
    }
    if (checkCompleteRow(b, 0, "o") ||
        checkCompleteRow(b, 1, "o") ||
        checkCompleteRow(b, 2, "o")) {
        return "o";
    }
    if (checkCompleteCol(b, 0, "x") ||
        checkCompleteCol(b, 1, "x") ||
        checkCompleteCol(b, 2, "x")) {
        return "x";
    }
    if (checkCompleteCol(b, 0, "o") || 
        checkCompleteCol(b, 1, "o") ||
        checkCompleteCol(b, 2, "o")) {
        return "o";
    }

    if (checkDownRightDiag(b, "x") ||
        checkUpLeftDiag(b, "x")) {
        return "x";
    }
    if (checkDownRightDiag(b, "o") ||
        checkUpLeftDiag(b, "o")) {
        return "o";
    }

    var numSpaces = 0;
    for(var r = 0; r <3; r++){
        for(var c = 0; c < 3; c++){
            if(b[r][c] === " "){
                numSpaces++;
            }
        }
    }
    if(numSpaces === 0){
        return "stalemate";
    }
    return null;
}

function checkCompleteRow(b, row, piece){
    if(b[row][0] === piece &&
       b[row][1] === piece &&
       b[row][2] === piece){
       return piece;
    }
    return null;
    
}

function checkCompleteCol(b, col, piece){
    if(b[0][col] === piece &&
       b[1][col] === piece &&
       b[2][col] === piece){
       return piece;
    }
    return null;
}

function drawboard(b) {
    console.log(` ${b[0][0]} | ${b[0][1]} | ${b[0][2]}`);
    console.log(`---+---+---`);
    console.log(` ${b[1][0]} | ${b[1][1]} | ${b[1][2]}`);
    console.log(`---+---+---`);
    console.log(` ${b[2][0]} | ${b[2][1]} | ${b[2][2]}`);
}

function getRowOrCol(name){
    var rc;
    do{
        rc = prompt(`Enter ${name} number 1-3:`);
        if (rc === "q"){
            console.log("quitting");
            process.exit();
        }
    } while (!isCorrectInput(rc));
    return rc;
}

function isCorrectInput(input) {
    if(input !=="1"&&
       input !=="2"&&
       input !=="3") {
        console.log("u suk a lot dud");
        return false;
    }
    return true;
}

function isMoveAllowed(b, row, col) {
    if (b[row - 1][col - 1] === " "){
        return true;
    }
    return false;
}

function checkDownRightDiag(b, piece){
    if(b[0][0] === piece &&
       b[1][1] === piece &&
       b[2][2] === piece){
           return piece;
       }
       return null;
}

function checkUpLeftDiag(b, piece){
    if (b[2][0] === piece &&
        b[1][1] === piece &&
        b[0][2] === piece) {
        return piece;
    }
    return null;
}

function getHumanMove(){
    while (true){
        row = getRowOrCol("row");
        col = getRowOrCol("column");
        if (!isMoveAllowed(board, row, col)){
            console.log("u suck a lot dud")
        }
        else{
            break;
        }
    }
    return [row - 1, col - 1];
}
