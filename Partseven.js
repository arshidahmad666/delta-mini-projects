//Q1: Arrow fun named arrayAverage that accepts an array of nos and return aver of those nos
const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
};
let arr=[1,2,3,4,5,6];
console.log(arrayAverage(arr));

//Q3:what is the output

const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);

//Qs4.What is the output of the following code:
let length=4;
function callback(){
    console.log(this.length);
}
    const obj={
        length:5,
        method(callback){
            callback();
        },
    };
    obj.method(callback,1,2);
    
