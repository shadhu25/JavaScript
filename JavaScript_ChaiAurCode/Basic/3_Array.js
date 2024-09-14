// Array

const myArray = [0,1,2,3,4,5,6,7,8];
const godName = new Array('Hari', "Krishn", `Radha`);
console.log(typeof myArray);
console.log(typeof godName);

// methods

// push()
    myArray.push(88);
    console.log(myArray);
// pop()
    myArray.pop(88);
    console.log(myArray);
// unshift()
    myArray.unshift(88);
    console.log(myArray);
// shift()
    myArray.shift(88);
    console.log(myArray);
// includes()
    console.log(myArray.includes(9));
// indexOf()
    // -1 when element not found
    console.log(myArray.indexOf(8));
// join()
    console.log(myArray.join());
    console.log(typeof (myArray.join()));
// slice()
    console.log(myArray.slice(1,3));
// splice()
    myArray.splice(1,2);
    console.log(myArray);
    
let marbleHeroes = ['IronMan', 'Thor', 'CaptainAmerica'];
let dcHeroes = ['SuperHero', 'BatMan', 'Flash'];

// different ways to concate the array

    // Using Push()
    marbleHeroes.push(dcHeroes);
    console.log(marbleHeroes);
    // Using concat()
    marbleHeroes = marbleHeroes.concat(dcHeroes);
    console.log(marbleHeroes);
    // Using spread operator
    marbleHeroes = [...marbleHeroes, ...dcHeroes];
    console.log(marbleHeroes);

// Nested array

    let nestedArr = [1,2,3,4, [5,6,7,8], [2,4,1, [3,4,2],5,9],4,6];
    // flat()
    nestedArr = nestedArr.flat(Infinity);
    console.log(nestedArr);
    // Array.from()
    stringArr = Array.from('Krishn');
    console.log(stringArr);
    // Interesting case return empty array
    console.log(Array.from({name: 'Krishn'}));
    // Array.of()
    let score1 = 100;
    let score2 = 200;
    let score3 = 300;
    scoreArr = Array.of(score1, score2, score3);
    console.log(scoreArr);


