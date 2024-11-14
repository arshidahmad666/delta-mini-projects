//Async keyword:
async function greet() {
  return "hello world"; //by default return a promise
}

//Return random no. using Async functions

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  //await keyword inside async fun
  await getNum(); //first  this call execute
  await getNum(); //then others after 1 sec
  await getNum(); //gives randm no.s
}

//ChangeColor using Async Functions

/* let h1 = document.querySelector("h1");

 function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
       resolve("color changed!");
     }, delay);
   });
 }

 async function demo() {
   await changeColor("red", 1000);
   await changeColor("orange", 1000);
   await changeColor("green", 1000);
   await changeColor("blue", 1000);
 }*/

//Handling Rejection with Await(if promise is rejected need to handle them)

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  try {
    // if any error occurs we catch them using try catch
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let a = 5; //so that execution not stops if error occurs
  console.log(a);
  console.log("new number=", a + 3);
}
