let btn = document.querySelector("button");
let outer = document.querySelector(".outer");

let inner = document.querySelector(" .inner");
let grow = 0;
let h2 = document.querySelector("h2");
btn.addEventListener('click', () => {

    btn.innerHTML = "Downloading..."
    let int = setInterval(() => {
        grow++;
        console.log(grow);
        h2.innerHTML = grow + "%";
        inner.style.width = grow + "%";

        if (grow >= 100) {
            clearInterval(int);
            h2.innerHTML = "Download Complete";
            btn.innerHTML = "Completed";
            btn.disabled = true;
        }
    }, 100);

});