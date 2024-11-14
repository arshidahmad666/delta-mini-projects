//Q1:Square and sum the array using arrow fun and find avg
let nums=[1,2,3,4,5];
const square=nums.map((num)=>num*num);
console.log(square);

 let sum=square.reduce((acc,cur)=>acc+cur,0);
 let avg=sum/nums.length;
 console.log(avg);

 
 //Q2: create an new array using map fun whose each el equal to orginal el
 let numbers=[2,4,6,8,-2,-4];
 console.log(numbers.map((number)=>number+5));


 //Q3: Create an new array whose el are in upercase of words present in org array
 let strings=["adam","bob","catlyn","donald","eve"];
 console.log(strings.map((string)=>string.toUpperCase()));


 //Q4: write a fun which accepts an array and a var no. of args.The fun should return a new array with org array value
 const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
doubleAndReturnArgs([2],10,4);//[2,20,8]


//Q5: write a fun that accepts two obects and retur a new obj which contains all the key val of first obj and sec obj
const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:3,d:4});//{a:1,b:2,c:3,d:4}