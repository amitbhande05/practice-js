let score = 33
//must try you get the output like this
//null => 0
//undefined => NaN (not a number)
//true => 1; false=> 0
//"33aabb" => NaN
// amit => NaN

console.log(typeof score);
console.log(typeof( score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn = 1
//must try you get the output like this
// 0 => false
//"" => false
// "amit" => true
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)