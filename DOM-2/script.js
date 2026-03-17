let btn = document.querySelector("button");
let main = document.querySelector("#main");

function ablity(){
btn.addEventListener('click', () => {

    btn.style.transition = "0.4s";
    let h1 = document.createElement("h1");
    let rot = Math.floor(Math.random() * 360);
    let x = Math.floor(Math.random() * 99);
    let y = Math.floor(Math.random() * 95);
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let scale = Math.random()*4;
    h1.innerHTML = "hwll";
    h1.style.position = "absolute";
    h1.style.transform = `rotate(${rot}deg)`;
    h1.style.color = `rgb(${r},${g},${b})`;
    h1.style.top = y + "%";
    h1.style.left = x + "%";
    h1.style.scale = scale;

    console.log(h1);
    main.appendChild(h1);
})
}

btn.addEventListener("click", () => {
    setInterval(ablity, 500); 
});
