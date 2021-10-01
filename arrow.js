// function doMath(num, num2) {
//     return num + num2;
// }
// const x = doMath(12, 21);
// console.log(x);

// const doSum = function (num, num2) {
//     return num + num2;
// }
// const result = doSum(10, 21);;
// console.log(result);


const result = num => num;              //function result(num){
                                        // return num
                                        //}
const output = result(12);
console.log(output);



const doubleIt = num => num * 2; 

const total = doubleIt(12);
console.log(total);

const sum = (num, num2) => num + num2;

const sumResult = sum(20, 24);
console.log(sumResult);


const give5 = () => 5;
const result2 = give5();
console.log(result2);


const doMath = (x, y) => {
    const sum = x +y;
    const diff = x-y;
    const result = sum * diff;
    return result
}

const output2 = doMath(10, 5);
console.log(output2);