let main = document.querySelector("#main")
let curser = document.querySelector("#cursor")
let house = document.querySelector("#house")

main.addEventListener('mousemove',(dets)=>{

curser.style.left = dets.x +"px";
curser.style.top = dets.y +"px";

})

house.addEventListener("mouseenter", () => {
  cursor.style.opacity = "0";
  
});

house.addEventListener("mouseleave", () => {
  cursor.style.opacity = "1";
  
});