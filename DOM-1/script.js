let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let arr = ["vineet", "raj", "ujjwal", "car", "timepass"];

btn.addEventListener('click', () => {
    let ran = Math.floor(Math.random() * arr.length);
    let r = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rot = Math.floor(Math.random() * 360);
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 400);

    let color = ` rgb(${r},${a},${b})`;

    h1.innerHTML = arr[ran];
    console.log(arr[ran]);

    h1.style.color = color;
    h1.style.transform = `rotate(${rot}deg)`;
    h1.style.top = y + "px";
    h1.style.left = x + "px";
    h1.style.transition = "0.4s";

})





















































































/* h1.addEventListener('mouseover',()=>{
    h1.innerHTML = `Vineet bhardwaj`
    h1.style.color = "red";
})
h1.addEventListener('mouseout',()=>{
    
    h1.innerHTML = `Vineet bhardwaj`
    h1.style.color = "#00ddff";


}) */













