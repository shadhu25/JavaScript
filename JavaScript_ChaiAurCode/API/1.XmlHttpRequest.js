const imgE1 = document.querySelector('img');
const btnE1 = document.querySelector('button');

btnE1.addEventListener('click', () => {
    createNewRequest();
});
btnE1.click();

function createNewRequest(){
    const XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
    XHR.responseType = 'json';
    // way1
    XHR.addEventListener('load', () => {
        // imgE1.src = JSON.parse(XHR.response).message;  use when you not set the XHR.responseType = 'json'
        imgE1.src = XHR.response.message;
    });
    // way2
    XHR.onload = () => imgE1.src = XHR.response.message;
}

function chaiAurCode(){
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(typeof data);
            console.log(data.followers);
        }
    }
    xhr.send();
}