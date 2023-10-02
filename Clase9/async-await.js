let getNameAsync = async (idPost) => {
    try {
        let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let post = await resPost.json()
        //console.log(post.title);
        let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        let user = await resUser.json()
        document.write(`${user.name} vive en ${user.address.city} escribio el post ${idPost}: ${post.title}`)
    } catch (error) {
        console.log(error);
    }
}

getNameAsync(80)