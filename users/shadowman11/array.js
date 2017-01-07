var a = [1, 2, 3];
console.log(a);
a.forEach(n => console.log(n));
var w = ["pen", "pineapple", "apple", "pen"];
console.log(a);
w.forEach(n => console.log(n));
var b = [["x", "o", "x"],
         ["o", "x", " "],
         ["o", " ", "o"]]; 
console.log(b[0]);
console.log(b);

console.log(`  |  |  `);
console.log(`--+--+--`);
console.log(`  |  |  `);
console.log(`--+--+--`);
console.log(`  |  |  `);

console.log();
console.log(` ${b[0][0]} | ${b[0][1]} | ${b[0][2]}`)
console.log(`---+---+---`);
console.log(` ${b[1][0]} | ${b[1][1]} | ${b[1][2]}`)
console.log(`---+---+---`);
console.log(` ${b[2][0]} | ${b[2][1]} | ${b[2][2]}`)