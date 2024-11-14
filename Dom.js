//queryselector
console.dir(document.querySelector("h1")); //select first p elemnt

console.dir(document.querySelector("#description")); //using id
console.dir(document.querySelectorAll("p"));//selects all elements

//style property(manipulating style)

let links=document.querySelectorAll(".box a");

for(link of links){ //using for of loop
    link.style.color="purple"; //inline style set not for css
}
// for(let i=0;i<links.length;i++){
//     links[i].style.color="purple";
// }