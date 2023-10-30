const post =[{title:'Post one', body:'this is post one', createdAt: new Date().getTime()}];
var interval;

function createPost(obj){
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>{
        obj.createdAt = new Date().getTime();
     //   post.push(obj);
        resolve(obj)
        },5000)
    })
}

function printPost(){
clearInterval(interval)
interval = setTimeout(()=>{
    post.forEach((ele)=>{
            console.log(ele.title);
        })
},1000)
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        //  console.log(new Date().getTime())
                resolve(new Date().getTime());
        }, 3000)
    })
}
// createPost({title: 'Post second', body: 'This is Post second'})
//         .then((post2)=>{
//             post.push(post2)
            
//             updateLastUserActivityTime().then((updateTime)=>
//             {
//                 console.log(updateTime)
//                 printPost();
//             })
//         })
Promise.all([createPost({title: 'Post second', body: 'This is Post second'}), updateLastUserActivityTime()])
            .then(([post3, updateTime])=>
            {
                post.push(post3);
                console.log(updateTime)
                printPost();
            })
            .catch((err)=>
            {
                console.log(err);
            }) 

