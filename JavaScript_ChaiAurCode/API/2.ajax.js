// Example of Synchronous code
const imgE1 = document.querySelector('img');
const btnE1 = document.querySelector('button');
// EX1
// alert('Hello World!');
// EX2
// const startTime = Date.now();
// let currentTime = startTime;
// while(startTime + 2000 > currentTime){
//     currentTime = Date.now();
// }
// EX3
// tis is deprecated not in use
btnE1.addEventListener('click', () => {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random', false);
    XHR.send();
//     XHR.responseType = 'json';
    XHR.addEventListener('load', () => console.log(JSON.parse(XHR.response)));
});

// Example of Asynchronous code (AJAX)
// EX1
setTimeout(console.log('hello world!'), 2000);
// EX2
btnE1.addEventListener('click', () => {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    XHR.send();
    XHR.responseType = 'json';
    XHR.addEventListener('load', () => imgE1.src = XHR.response.message);
});
