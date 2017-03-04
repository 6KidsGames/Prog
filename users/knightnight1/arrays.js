
var a = [1, 2, 3]

console.log(a);
a.forEach(n  => console.log(n));

var xue = ["farts", "smell", "realy", "bad"];
console.log(xue);
xue.forEach(n  => console.log(n));

var b = [["o", "o", "x"],
         ["x", "x", "o"],
         ["x", "o", "o" ]];
console.log(b[0])
console.log(`${b[0][0]}  | ${b[0][1]} | ${b[0][2]}`);
console.log(`---+---+---`);
console.log(`${b[1][0]} | ${b[1][1]} | ${b[1][2]}`);
console.log(`---+---+---`);
console.log(`${b[2][0]} | ${b[2][1]} | ${b[2][2]}`);
var v = [[[1, 2, 3], [4, 5, 6]],
[[7, 8, 9],[10, 11, 12]]];
          console.log(v[0][0][0])



drawboard(b);


function drawboard(b){
    console.log(b[0])
    console.log(`${b[0][0]}  | ${b[0][1]} | ${b[0][2]}`);
    console.log(`---+---+---`);
    console.log(`${b[1][0]} | ${b[1][1]} | ${b[1][2]}`);
    console.log(`---+---+---`);
    console.log(`${b[2][0]} | ${b[2][1]} | ${b[2][2]}`);
}