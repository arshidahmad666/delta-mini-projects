//Catfact randomn:
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  //return promise
  let fact = await getFacts(); //wait untill below gives valid fact
  console.log(fact);

  //to store it in result
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
  //this gives a random catfact
  try {
    let res = await axios.get(url); //get method using axios
    return res.data.fact; //direct data of fact print
  } catch (e) {
    console.log("error", e);
    return "No fact found";
  }
}

//Random img
let btn2 = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
  //return promise
  let link = await getImage(); //wait untill below gives valid img

  let img = document.querySelector("#results"); //acess image
  img.setAttribute("src", link);
  console.log(link);
});

async function getImage() {
  //this gives a random img
  try {
    let res = await axios.get(url2); //get method using axios
    return res.data.message; //direct data of fact print
  } catch (e) {
    console.log("error", e);
    return "/";
  }
}
