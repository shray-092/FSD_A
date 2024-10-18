/*sayhello=()=>{
    console.log("hello function")
};
console.log("start");
setTimeout(sayhello,9000);
console.log("end");


console.log("start");
setTimeout(() =>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("second task completed");
        },3000);
    },2000);
},2000);*/





/*const myPromise=new Promise((resolve,reject)=>{
    let success=3;
    if(success)
    {
        resolve("Data send sucess");
    }else{
        reject("data failed to send");
    }
});
myPromise.then((mesage)=>console.log(mesage))
.catch((error)=> console.log("error fetching data"+error));*/


function task(message,delay){
    return new Promise((resolve) =>{
        setTimeout(()=> {
            console.log(message);
            resolve();
        },delay);
    });
}
task("first task completed",1000)
.then(() => task("second task completed",2000))
.then(() => task("third task completed",2000));



    

