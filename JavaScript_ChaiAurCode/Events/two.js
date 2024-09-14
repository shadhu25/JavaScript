// applying events
// way1
// include a function in onclick property of any element in HTML
{/* <span onclick = "consol.log('Hello world!');"></span> */}

// way2
// document.querySelector('.container').onclick = () => console.log("hello");
// overwrite the previous event
// document.querySelector('.container').onclick = () => console.log("world!");
// adding another handler
// document.querySelector('.container').ondblclick = () => console.log("world!");

// way3
// document.querySelector('.container').addEventListener('click',() => console.log("hello"));
// add another events
// document.querySelector('.container').addEventListener('click',() => console.log("world!"));

// Events

const container = document.querySelector('.container');
const input = document.querySelector('input');

// All Mouse Events
// click
// dblclick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mousemove
// mouseout == mouseleave 
// mouseover almost= mouseenter 
// wheel 
// scroll 
// pointerenter == mouseenter 
// pointerleave == mouseleave 

// For mobiles:-
// touchstart
// touchend

// For computer & mobiles 
// drag  after draggable ="true"
// pointermove  == mousemove 
// pointerenter == mouseenter  && touchstart
// pointerleave == mouseleave && touchend

// Form Events
// input
// input.addEventListener('input', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
//     console.log("Input data: ",e.data);
// });

// focus
// input.addEventListener('focus', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
// });

// blur
// input.addEventListener('blur', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
// });

// change
// input.addEventListener('change', (e) => {
//     console.log("Event object: ",e);
//     console.log"Event target object: ",(e.target);
// });

// Keyboard Events
// keypress
// container.addEventListener('keypress', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
//     console.log("Key value: ",e.key);
//     console.log("Key code: ",e.keyCode);
//     console.log("Key char code: ",e.code);
// });

// keydown
// container.addEventListener('keydown', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
//     console.log("Key value: ",e.key);
//     console.log("Key code: ",e.keyCode);
//     console.log("Key char code: ",e.code);
// });

// keyup
// container.addEventListener('keyup', (e) => {
//     console.log("Event object: ",e);
//     console.log("Event target object: ",e.target);
//     console.log("Key value: ",e.key);
//     console.log("Key code: ",e.keyCode);
//     console.log("Key char code: ",e.code);
// });

// Mouse Events
// For Computer
// click
container.addEventListener('click', (e) => {
    console.log(e);
    console.log("clientX: ",e.clientX);
    console.log("clientY: ",e.clientY);
    console.log("x: ",e.x);
    console.log("y: ",e.y);
    console.log("layerX: ",e.layerX);
    console.log("layerY: ",e.layerY);
    console.log("offsetX: ",e.offsetX);
    console.log("offsetY: ",e.offsetY);
    console.log("pageX: ",e.pageX);
    console.log("pageY: ",e.pageY);
    console.log("screenX: ",e.screenX);
    console.log("screenY: ",e.screenY);
});

// dblclick
// container.addEventListener('dblclick', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mousedown
// container.addEventListener('mousedown', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mouseup
// container.addEventListener('mouseup', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mouseenter
// container.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mouseleave
// container.addEventListener('mouseleave', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mousemove
// container.addEventListener('mousemove', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mouseover almost= mouseenter
// container.addEventListener('mouseover', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// mouseout == mouseleave 
// container.addEventListener('mouseover', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// wheel
// container.addEventListener('wheel', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// scroll
// container.addEventListener('mouseover', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// pointerenter == mouseenter
// container.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// pointerleave == mouseleave 
// container.addEventListener('pointerleave', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// For Mobile
// touchstart
// container.addEventListener('touchstart', (e) => {
//     console.log(e);
// });

// touchend
// container.addEventListener('touchend', (e) => {
//     console.log(e);
// });

// touchmove
// container.addEventListener('touchmove', (e) => {
//     console.log(e);
// });

// For Computer & Mobiles 
// pointermove  == mousemove 
// container.addEventListener('pointermove', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// pointerenter == mouseenter  && touchstart
// container.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// pointerleave == mouseleave && touchend
// container.addEventListener('pointerleave', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });

// drag  after draggable ="true"
// container.addEventListener('drag', (e) => {
//     console.log(e);
//     console.log("clientX: ",e.clientX);
//     console.log("clientY: ",e.clientY);
//     console.log("x: ",e.x);
//     console.log("y: ",e.y);
//     console.log("layerX: ",e.layerX);
//     console.log("layerY: ",e.layerY);
//     console.log("offsetX: ",e.offsetX);
//     console.log("offsetY: ",e.offsetY);
//     console.log("pageX: ",e.pageX);
//     console.log("pageY: ",e.pageY);
//     console.log("screenX: ",e.screenX);
//     console.log("screenY: ",e.screenY);
// });