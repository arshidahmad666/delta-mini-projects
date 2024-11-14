// let btn=document.querySelector("button"); //single btn action-onclick
// console.dir(btn);

// btn.onclick=function(){
//     console.log("button was clicked");
// };

// let btns=document.querySelectorAll("button"); //multiple btn onclick property
// for(btn of btns){
//     btn.onclick=sayHello; //onclick
//     btn.onmouseenter=function(){  //onmouseenter
//         console.log("you entered a button");
//     };
// }
// function sayHello(){
//     alert("Hello!");
// }

//EventListener:

let btns=document.querySelectorAll("button"); //multiple values excute
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){ //two funs execute at one time
    alert("Hello!");
}
function sayName(){
    alert("Apna college");
}

let p=document.querySelector("p");
p.addEventListener("click",function(){

    console.log("para was clicked");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});

//This keyword
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

 h1.addEventListener("click",changecolor);
 h3.addEventListener("click",changecolor);
