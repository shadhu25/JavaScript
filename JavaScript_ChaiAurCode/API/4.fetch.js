// fetch API
fetch('https://dummyjson.com/users')
.then(response => response.json())
.then(data => fetch(`https://dummyjson.com/posts/user/${data.users[0].id}`))
.then(response => response.json())
.then(data => fetch(`https://dummyjson.com/comments/post/${data.posts[0].id}`))
.then(response => response.json())
.then(data => fetch(`https://dummyjson.com/users/${data.comments[0].user.id}`))
.then(response => response.json())
.then(data => console.log(data.firstName,data.lastName))
.catch(console.log);