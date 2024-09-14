let myArray = [1,2,3,4,5,6,7,8,9];
let myNewArray = [];
let sum = 0;

// filter()
// myNewArray = myArray.filter(element => element > 6);
// console.log(myNewArray);
// using forEach()
// myNewArray = [];
// myArray.forEach(element => {
//     if(element > 6)
//         myNewArray.push(element);
// });
// console.log(myNewArray);

// map()
// console.log(myArray);
// myNewArray = myArray.map(element => element*element);
// console.log(myNewArray);
// using forEach()
// myNewArray = [];
// myArray.forEach(element => myNewArray.push(element * element));
// console.log(myNewArray);

// reduce()
// console.log(myArray);
// sum = myArray.reduce((sum, element) => sum + element,0);
// console.log(sum);
// using forEach()
// sum = 0;
// myArray.forEach(element => sum += element);
// console.log(sum);

// nested function
// square all even number and give total sum
// sum = myArray.filter(element => element % 2 == 0)
//              .map(element => element * element)
//              .reduce((sum,element) => sum + element, 0);
// console.log("The total sum = ",sum);