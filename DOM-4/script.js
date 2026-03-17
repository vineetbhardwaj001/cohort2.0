let img = document.querySelector('img')
let love = document.querySelector('#love')

img.addEventListener('dblclick', () => {

    love.style.opacity = 1;
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    

    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 1000);
})