function makeHttpRequest(method, url, callBack){
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();
    request.responseType = 'json';
    request.addEventListener('load', () => callBack(request.response));
}
// callback hell
makeHttpRequest('GET', 'https://dummyjson.com/users', usersData => {
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, postsData => {
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, commentsData => {
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, userData => {
                console.log(userData.firstName,userData.lastName);
            })
        });
    });
});
// resolving callback hell using promises
function makeHttpRequestUsingPromise(method, url){
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();
    request.responseType = 'json';
    const promise = new Promise((resolve, reject) => {
        request.addEventListener('load', () => {
            resolve(request.response);
            // reject("I'm sorry");
        });
    });
    return promise;
}

makeHttpRequestUsingPromise('GET', 'https://dummyjson.com/users')
.then(usersData => makeHttpRequestUsingPromise('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then(postsData => makeHttpRequestUsingPromise('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then(commentsData => makeHttpRequestUsingPromise('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
.then(userData => console.log(userData.firstName,userData.lastName))
.catch(error => {
    console.log(error)
});