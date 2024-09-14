function sorry(name){
    console.log("sorry",name);
}
const id = setInterval(sorry,1000,"Nishu");
document.querySelector('button').addEventListener('click',() => clearInterval(id))