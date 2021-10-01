const age = [12,3,3,4,4,5,5];
const age2 = [12,32,43,234,3];
const age3 = [12,32, 43, 32, 54];
const allAge = age.concat(age2).concat([12, 32, 3]).concat(age3);
const allAge2 = age + age2 + age3;
const allAge3 = [age , age2 , age3];
const allAge4 = [...age, ...age2, ...age3];
console.log(allAge4);
console.log(allAge3);
console.log(allAge2);
console.log(allAge);



//math max;
const bill = 123;
const jeff = 322;
const elon = 323;

const bigger = Math.max(bill, jeff, elon);
console.log(bigger);

const netWorth = [123, 322, 345];
const whoIsBigger = Math.max(...netWorth);
console.log(whoIsBigger)