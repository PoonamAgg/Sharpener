const posts = [{title: 'POST1'}];

async function makePromise(){
    try {
        const post2 = await createPost({title: 'POST2'});
        console.log(post2);
        const post3 = await createPost({title: 'POST3'});
        console.log(post3);
       const deleteRes1 =await deletePost();
       console.log(deleteRes1)
       const deleteRes2 =await deletePost();
       console.log(deleteRes2)
       const deleteRes3 =await deletePost();
       console.log(deleteRes3)
    } catch (error) {
        console.log(error)
    }
    }
    
 function createPost(obj)
{
   return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(obj);
            resolve('Post created');
        }, 3000)
    }) 
}
   
function deletePost()
{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
})
}

    makePromise();

