async function fetchData() {
  try {
    const usersResponse = await fetch('https://dummyjson.com/users');
    const usersData = await usersResponse.json();
    
    const userPostsResponse = await fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`);
    const userPostsData = await userPostsResponse.json();
    
    const postCommentsResponse = await fetch(`https://dummyjson.com/comments/post/${userPostsData.posts[0].id}`);
    const postCommentsData = await postCommentsResponse.json();
    
    const commentUserResponse = await fetch(`https://dummyjson.com/users/${postCommentsData.comments[0].user.id}`);
    const commentUserData = await commentUserResponse.json();
    
    return { firstName: commentUserData.firstName, lastName: commentUserData.lastName };
  } catch (error) {
    console.log(error);
  }
}

fetchData().then(console.log);