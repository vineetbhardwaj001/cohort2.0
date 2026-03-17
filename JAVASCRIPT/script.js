/* let sum = prompt("enter which table you want")
for(let i =1 ; i<=10 ; i++ ){
console.log(` ${sum} x ${i} = ${sum * i} `);
} */

/* let age = prompt("user ki age ");

if(age === null){
console.error("you cancelled");

}else {
    if(age.trim()===""){
console.error("please kuch to likhe de yr");

    }else{
        if(age>=18){
 age = Number(age.trim());
 console.log("you are eligiable for vote ");
 
        }else{
            if(age !==Number){
console.log("please enter number only ");

            }else{
                if(age.trim() !== Number){
console.log("try to short enter age ");

                }
            }
        }

       
    }
} */

/* let pass = "8791";
let naame = prompt("enter your name");
let password = prompt("enter your password");
if(pass === password){
console.log(`welcome ${naame} `);
}else{
    console.log("wrong password nikale ja");
}
 */

/* let count = 0;

for (let i = 1; i < 16; i++) {
    if (i > 8) {
        count++;
    }

}
console.log(count); */

/* let count = 0;
let pass = "hello";
let password = prompt("enter your password");
if (pass !== password) {
    count= 1;
    console.error(`your ${count} attempt`);
    
}else{
    if(count === 3){
        console.error("you are attempts 3 times try next day ! ");
    }
} */

//coupn code  = // LEARNOVA

/* let attempt = 0;
let pass = "vineet";
let password = prompt("enter your passord");
attempt++;

while (attempt < 3 && pass !== password) {
    password = prompt("enter your passord");
    attempt++;
    console.log(`you use ${attempt} attempt `);
    
}

if(attempt === 3 && pass !== password){
    console.error("account block ");
    
}else if(pass === password){
    console.log("welcome MR. programer");
    
} */


/* let flag = false;
let balance = 1000;
let count = 0;

while (balance > 0 && count !== 3) {
    let withdraw = +prompt("kitna maal nikalna hai bro");
    count++;
    if (withdraw <= balance) {

        balance -= withdraw;

        console.log(`withdraw balance = ${withdraw}`);
        console.log(`avabile balance = ${balance}`);

    } else {

        flag = true;

        break;
    }
}

if (flag === true) {

    console.log("insufficient amount");
}

console.log(`after withdrwal avabile balance  = ${balance}`); */

// Function Start -> aapka code jo turant nahi chalega tab chalega jab app bologe ki ab chalo 
// app us code ko kitni bhi baar chala sakte ho 

/* function hello(){
    console.log("thaali uthao");
    console.log("khaana bharo");
    console.log("table pe aao");
    console.log("khaana khaalo");
    console.log("bartan rakho");
    
}
 hello();
 */

/* array hai abc ki value j argument hai bo value jaiyengi per baki ek array me jaiyegi
function abcd(a,b,c,...val){

console.log(a,b,c,val);

}


abcd( 1,2,3,4,5,6,7,8 ); */

// spread function

/* function abcd(a,b,c,d){
console.log(a,b,c,d);

}
let arr = [1,2,3,4]
abcd(...arr); */

// Nested function

/* function abcd(){
    console.log("hello vineet");
    
    function defg(){
        console.log("hey");
    }
    defg();
}
abcd(); */

// Scope Chain

/* let a = 12; // golably hota hai
function abcd(){
    // console.log();
    let b = 13;  // ek variable jaha banta hai bo baha use kiya jat hai bs matlab ki b function me hi use h sakta hai
    function defg(){
    }
}
abcd(); */

// undersatanding immediately invoked function expression (IIFE)

/* (function(){

}) */

// Arrow Function , Fat Arrow , Anonymous, Higher Oder, Callback, First Clas , Pure function , Impure Function ;
// Fat Arrow -> () =>{};

/* let fun = () => {
    console.log("heyheybbbbbbb");
};

fun(); */

// Anonymous -> no name function 

// Higher Oder function -> ek aisa func jo ki return karde ek aur function 

/* function abcd(){
    return function(){

    }
} */

// wo fun accept karle ek or func parameter mein

/* function abcd(a){
  
}
abcd(function(){

}); */

// Callback -> ek func jo parameter me argument send kar us ko callback kahte hai

/* function abcd(a){

}
abcd(function(){
    //ye callback hai
}); */

// first class function ->  is a concept hai fun us language mein variable ki trah use ho sakte hi
/* let a = function abcd(){

};
abcd(function(){ // abcd(1,2)

},2);
 */

// pure function ek aisa function hai 
// same input = same output 
// koi side effect nahi hoga 

/* let a = 12;
function abcd(val){
console.log(val+2);
}
abcd(12); */

// impure function
// same input = different o/p ho skta hai
// koi na koi side effect ho skta hai

/* let a = 12;
function abcd(val){
    a = Math.random()+2;
console.log(a);
}
abcd(12);
abcd(12);
abcd(12);
abcd(12);
abcd(12); */

// Closures -> ek fun jo return karta hai function but returning function jo hai wo parent func ka koi variable use karega

/* function abcd(){
    let a = 12;
    return function(){
        console.log(a);
        
    }
} */

// let arr = [1,2,4,5,3,6];

/* function add (...nums){ // rest opertors -> ...
console.log(nums);

}
add(1,2,3,4,5,6,7,8,9,0); */

/* function add(...nums) {

 /* let sum = nums.reduce(function (acc, val) {

        return acc + val; 

 // accumaltor ki value 0 jab karni hai jab add karo barna multiple ke time accumaltor ki value 1 karni hai ok 
    
 }, 0); 
 
 // this is acc value 0;

    console.log(sum); */

/* for(let i = 0; i < nums.length; i++){
   sum += nums[i]; 
}
    console.log(sum); */

/*   nums.forEach(function (val) {
 
     sum += val; 
 
  })
  console.log(sum);
   */


// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0); 

/*   nested function 

function parent() {
    let a = 12;
    function child() {

        console.log(a);

    }
    child();
}
parent(); */

/* create a arr and add one on the end and remove begging

let a = ["ap1","ap2","ap3","ap4","ap5"];
a.push("vineet");
a.unshift("ap2"); */

/*  print all element let arr =[1,2,3,4,5,6,7];
for(let i =0 ; i <arr.length; i++){
console.log(arr[i]);

} */

/* let obj = {
    name: "vineet",
    age : 21,
    city : "narora",
};

// use for loop for(variable in objectname)
for(let id in obj){
console.log(obj[id]);

}

/* console.log(obj.name);
console.log(obj.age);
console.log(obj.city); */

/* setTimeout(()=>{
    console.log("vineet");
    
},2000); */

// HIGHER oder function 
/* function runTwice(fn) {
    fn();
    fn();
}
runTwice(function () {
    console.log("hello");

}); */

// pure function 
/* let a = 0;
function abcd(val) {
    a++;
    console.log(val + a);
}
abcd(3); */

/* let arr =[1,2,3,4,5,6];
arr.map((num)=>{
console.log(num**2);

}); */

/* let a = [1000,2000,3000];
let total = a.reduce((acc,val) => acc+val, 0);
console.log(total); */

/* let a = [1, 2, 3, 4, 5, 6];
let total = a.filter((num) => {
    return num % 2 === 0;

})

console.log(total); */

/* for(let i = 1; i < 11; i++){
console.log(i);
}

let obj = {
    name: "vineet",
    age: 21,
    city : "narora",
};

for(let id in obj){
console.log(obj[id]);

}

let a =[1,2,3,4,5];

for(let i = a.length; i>=0; i--){
console.log(a[i]);

}

for(let i = 1; i<=20;i++){
   if(i%2===0){
console.log(i);

   }
     
} */

















































   





















































