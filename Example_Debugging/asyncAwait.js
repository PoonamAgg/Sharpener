// console.log('person1: Shows Ticket');
// console.log('person2: Shows Ticket');

// const promiseWifeBringingTicks =  new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve('Ticket');
// },3000)
// });

// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('Wife: I have the tics');
//     console.log('husband: We should go in');
//     console.log('Wife: I am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// });

// const getButter= getPopcorn.then((t) => 
// {
//     console.log('husband: I got some Popcorn');
//     console.log('husband: We should go in');
//     console.log('Wife: I need butter on my popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} butter`));
// });
// getButter.then((t)=> console.log(t));

// console.log('person4: Shows Ticket');
// console.log('person5: Shows Ticket');

console.log('person1: Shows Ticket');
console.log('person2: Shows Ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(( )=> reject('Ticket'),3000)
    });
    // const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

    // const getCandy = new Promise((resolve, reject)=> resolve(`candy`));

    // const getCoke = new Promise((resolve, reject)=> resolve(`coke`));

    //const getButter = new Promise((resolve, reject)=> resolve(`butter`));

  //  const getDrink = new Promise((resolve, reject)=> resolve(`drink`));
  let ticket;
    try{
        ticket = await promiseWifeBringingTicks;
    } catch(e)
    {
        ticket = 'sad Face';
        //console.log(e);
    }
    

    // let[popcorn,candy, coke] = await Promise.all([getCandy,getCoke,getPopcorn]);
    // console.log(`${popcorn}, ${candy}, ${coke}`);

    // console.log(`Wife: I have the ${ticket}`);
    // console.log('husband: We should go in');
    // console.log('Wife: I am hungry');

    // let popcorn = await getPopcorn;

    // console.log(`husband: I got some ${popcorn}`);
    // console.log('husband: We should go in');
    // console.log('Wife: I need butter on my popcorn');

    // let butter = await getButter;

    // console.log(`husband: I got some ${butter} on popcorn`);
    // console.log(`husband: Anything else Darling`);
    // console.log(`wife: I want coldDrink with Popcorn`);

    // let drink = await getDrink;
    
    // console.log(`husband: I got some ${drink} with popcorn`);
    // console.log('Wife: Thank you, Lets go inside')
    // console.log(`Husband: Anything else Darling?`);
    // console.log(`Wife: We are getting late`);


    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: Shows Ticket');
console.log('person5: Shows Ticket');