let form=document.querySelector("form");
form.addEventListener("submit",function (event){
    event.preventDefault();
});

let user=document.querySelector("#user"); //change Event(major changes)
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value=",this.value);

});
user.addEventListener("input",function(){ //Input Event(indivdual change)
    console.log("input event");
    console.log("final value=",this.value);

});

//Text Editor using these events

let inp=document.querySelector("#text"); 
let p=document.querySelector("p"); 
inp.addEventListener("input",function(){

    inp.addEventListener("keypress",function(){ //keypress event
        console.log("key is pressed");
    });

    inp.addEventListener("mouseout",function(){ //mouseout event
        console.log("cursor moved");
    });

    inp.addEventListener("load",function(){
        console.log("scrolled is fully loaded");
    });

    console.log(inp.value);
    p.innerText=inp.value;

});



