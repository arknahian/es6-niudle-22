//way 1
function add(num1, num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const x = add(12);
console.log(x);


//way 2 
function add2(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
var y = add2(12);
console.log(y);


//way 3
function add3(num1, num2 = 0) {
    return num1 + num2;
}
var z = add3(13);
console.log(z);