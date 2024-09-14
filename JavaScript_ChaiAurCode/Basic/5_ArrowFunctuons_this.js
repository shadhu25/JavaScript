// arroe function and this

const user = {
    username: 'hitesh',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to websie`);
        console.log(this)
    },
}
user.welcomeMessage();

console.log(this); // {}

function one() {
    let user = 'hjsdhfjds0';
    console.log(this);
    console.log(this.user); // undefined
}

one();

const chai = function(){
    let user = 'hjsdhfjds0';
    console.log(this);
    console.log(this.user); // undefined
}

chai();

const chai1 = () => {
    let user = 'hjsdhfjds0';
    console.log(this); // {}
    console.log(this.user); // undefined
}

chai1();

// const sum = (num1, num2) => (num1 + num2);
const sum = (num1, num2) => ({username: 'krishn'});

// Immediately Invoked Function Expressions (IIFE)
// named IIFE
(function Sita(){
    console.log("pranaam");
})(); // must use semicolon when you using two adjacent IIFE

// unNamed IIFE
(function Ram(sita){
    console.log(" Jai ho ", sita, " maiya");
})("Sita")
