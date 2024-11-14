//promises are used to avoid Callback Hell problem

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success:data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

//Methods then() and catch() to look easier :

/*let request=savetoDbPromise("apna college");//request =promise obj
 request
 .then(()=>{ //success callback
     console.log("data1 saved. promise resolved");

     savetoDb("helloworld") //2nd data print
     .then(()=>{
        console.log("data2 saved. promise resolved");
    })
    console.log(request);
 })

 .catch(()=>{ //failure callback
     console.log("promise rejected");
     console.log(request);
}); */

//Improved version of above

savetoDb("apna college") // data save first
  .then((result) => {
    //valid result resolved
    //if success then print
    console.log("data1 saved");
    console.log("result of promise:", result);

    return savetoDb("helloworld"); //2nd data save
  })
  .then((result) => {
    //valid result resolved
    //if success then print
    console.log("data2 saved");
    console.log("result of promise:", result);
    return savetoDb("shradha"); //3rd data save
  })
  .then((result) => {
    //valid result resolved
    console.log("data3 saved"); //if success then print
    console.log("result of promise:", result);
  })

  .catch((error) => {
    //if error occurs then catch here
    console.log("promise rejected");
    console.log("error of promise:", error);
  });
