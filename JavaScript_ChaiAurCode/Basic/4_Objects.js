// Objects

// Objects Literal
let mySym = Symbol('key1');
let basicDetails = {
    name: 'Krishn',
    "full-name": 'Krishn Kant Kumar',
    [mySym]: 'mykey1',
    age: 22,
    location: 'hajipur',
    email: 'krishnkant979@gmai.com',
    isLoggedIn: false,
    lastLoginDays: ['monday', 'saturday'],
};

console.log(basicDetails.name);
console.log(basicDetails['full-name']);
console.log(basicDetails['email']);
console.log(basicDetails.lastLoginDays[0]);
console.log(basicDetails[mySym]);
console.log(mySym);

basicDetails.email = 'shadhushadhu25@gmail.com';
console.log(basicDetails.email);
// Object.freeze(basicDetails);
basicDetails.email = 'krishnkant979@gmai.com';
console.log(basicDetails.email);
basicDetails.greeting = function (){
    console.log(`Hello my dear ${this.name}`);
}
basicDetails.greeting();


// singleton object
const singletonObject = new Object();
const tinderUser = {};

// nested object
const regularUser = {
    email: 'Krishnkant979@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'krishnkant',
            lastname: 'kumar',
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);

// object concat
const obj1 = {1: 'a', 2: 'b'};
const obj2 = {2: 'a', 2: 'b', 9: 'a', 4: 'b'};
console.log(obj2);

const obj3 = {obj1, obj2};
console.log(obj3);

// Object.assign()
    const obj4 = {};
    Object.assign(obj4, obj2);
    console.log(obj4);
    const obj5 = Object.assign({}, obj1, obj2);
    console.log(obj5);
// using spread operator
    const obj6 = {...obj1, ...obj2};
    console.log(obj6);

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('email'));

// Object destructuring
    console.log(regularUser.email);
    const {email} = regularUser;
    console.log(email);
    const {email: em} = regularUser;
    console.log(em);

// JSON API

// {
//     "name": "Krishn",
//     "courseName": "js in hindi"
//     "price": "free",
// }