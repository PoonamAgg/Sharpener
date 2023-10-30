async function makePromise(){


const posts = [{title: 'POST1'}];

const createPost= await new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve('Post created');
        }, 3000)
    }) 
    console.log(createPost);

const deletePost= await new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
        
})
console.log(deletePost);
}
makePromise();










