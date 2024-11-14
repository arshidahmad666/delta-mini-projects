//Request an API using Promises:
let url = "https://catfact.ninja/fact";

fetch(url) //to req a url
  .then((res) => {
    //catch result
    return res.json(); //for accessing data or parse to return in json format
  })
  .then((data) => {
    //return promises
    console.log("data1=", data.fact); //if sucesful then print data
    return fetch(url); //again req
  })

  .then((res) => {
    //catch res
    return res.json(); //again convert into json format
  })

  .then((data2) => {
    //return promises
    console.log("data2=", data2.fact); //if sucesful then print data2
  })

  .catch((err) => {
    console.log("ERROR", err);
  });

//Request an API using async/await functions:

let url2 = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    //if any error occurs asychnrs cant wait
    let res = await fetch(url2); //wait for this call
    let data = await res.json(); //also wait for this
    console.log(data.fact); //print data of fact

    let res2 = await fetch(url2); //wait for this call
    let data2 = await res2.json(); //also wait for this
    console.log(data2.fact); //print data of fact
  } catch (e) {
    console.log("error", e);
  }

  console.log("bye"); //aysnchronous fun cant wait for above execution
  //if error occurs bye fun excecute
}
