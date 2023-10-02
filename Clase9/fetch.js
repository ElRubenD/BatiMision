const getNameFetch = (idPost) =>{
    //end point
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        //recibe el callback
        .then((res)=>{
            //console.log(res);
            //retorna la respuesta del llamado asincrono en formato JSON
            return res.json()        
        })
        .then((post)=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            //recibe el callback
            .then((res)=>{
                return res.json()
            })
            .then((user)=>{
                console.log(`${user.name} vive en la calle: ${user.address.street}`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

getNameFetch(48)