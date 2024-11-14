//Q1: Return array larger then a number
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;

//elements larger than a number num
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//Q2: Unique char from a string

 /*let str="abcdabcdefgggh";

 //function to get String with all unique elements
 function getUnique(str){
    let ans="";
     for(let i=0;i<str.length;i++){
         let currChar=str[i];
        if(ans.indexOf(currChar)==-1){
             //if current character is not added,then add it in ans.
             //Otherwise it is a duplicate.
             ans+=currChar;
        }
     }
    return ans;
 }
 getUnique(str);*/

//Q3: Return longest country name as output

let country=["Australia","Germany","United States of America"];
function longestName(country){
    let ansIdx=0;
    for(let i=0;i<country.length;i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}
longestName(country);
            
//Q4: Count no of vowels in a string arg

let str="apnacollege";
function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(
            str.charAt(i)=="a"||
            str.charAt(i)=="e"||
            str.charAt(i)=="i"||
            str.charAt(i)=="o"||
            str.charAt(i)=="u"){

                count++;
            }
        }
        return count;
    }

    //Q5: Generate random number within a range(start,end)
    let start=100;
    let end=200;
    function generateRandom(start,end){
        let diff=end-start;
        return Math.floor(Math.random()*diff)+start;
    }
        
