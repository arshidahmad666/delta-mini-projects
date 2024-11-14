/*Q..On the basics of Country Name

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value; //input and value access
  console.log(country);

  let colArr = await getColleges(country); //counrtyarray
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = ""; //list empty after search
  for (col of colArr) {
    console.log(col.name);

    let li = document.createElement("li"); //add clgs in li
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(country) {
  try {
    let res = await axios.get(url + country); //single string pass
    return res.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
}*/

//Q..ON the basics of States in india

let url = "http://universities.hipolabs.com/search?country=india&name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value; //input and value access
  console.log(state);

  let colArr = await getColleges(state); //counrtyarray
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = ""; //list empty after search
  for (col of colArr) {
    console.log(col.name);

    let li = document.createElement("li"); //add clgs in li
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(state) {
  try {
    let res = await axios.get(url + state); //single string pass
    return res.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
}
