// console.log("hello")


const promiseOne = new Promise( function(resolve, reject){

    setTimeout(function (){
        // console.log("Async Task Complate");
        // resolve()
    }, 1000)
})


 promiseOne.then(function (){
    console.log("done ----------------")

 })


// console.log(promiseOne)




const chkPromise =  new Promise( function (resolve, reject) {

    //  resolve( {name:"jahid"})

}) 
chkPromise.then( function (user){

    // console.log(user)

})

// console.log(chkPromise)



const promises = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName: "Jahid", pass:"122" })
        } else{
            reject('error !! 404')
        }
    }, 1000);

}).then
((user)=>{
    console.log(user)
    return user.userName
})
.then
((userName)=>{
    console.log(userName)
})
.catch((error)=>{
console.log(error)

})





console.log(promises)
/*
 * End here to start begin at 
 *first then. and => resolve to .user and begin Start  
 * second then. print direct "UserNmae"
 * 
 */