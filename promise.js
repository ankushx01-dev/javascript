const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task is Complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed")
}) //resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log('Async Task 2 Resolved')
})
//promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"ankush",email:"rajputx000@gmail.com"}) 
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})
//promise 4
const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"achu",password:"123"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('the promise is rejected or resolved')   
})


//promise 5
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js",password:"123"})
        }else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive() 
//intro of fetch
// async function getAllUser(){
//  try {
//     const response =await fetch('https://api.github.com/users/ankushx01-dev')
//     console.log(response);
    
//     const data = await response.json()
//     console.log(data)
//  } catch (error) {
//     console.log('E: ',error)
//  }
// }
// getAllUser();

//using then(),catch()

fetch('https://api.github.com/users/ankushx01-dev')
.then(function(response){
    return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
    console.log(error)
})