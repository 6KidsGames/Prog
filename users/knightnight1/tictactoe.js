const prompt = require('prompt-sync')();

console.log("hello user this is tic tac toe the other person is going to kick your butt. type q to exit");
var board = [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " " ]];

while (true) {
    var row = prompt('Enter row number 1-3: ');
    if (row === "q"){
        console.log("quitting");
        process.exit();
    }
    var col = prompt('Enter column number 1-3: ');
    console.log(`${row},${col}`);
    drawboard(board);
}

function drawboard(b){
    console.log(` ${b[0][0]} | ${b[0][1]} | ${b[0][2]}`);
    console.log(`---+---+---`);
    console.log(` ${b[1][0]} | ${b[1][1]} | ${b[1][2]}`);
    console.log(`---+---+---`);
    console.log(` ${b[2][0]} | ${b[2][1]} | ${b[2][2]}`);
}
