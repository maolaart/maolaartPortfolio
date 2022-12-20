let header = document.querySelector('header')

window.addEventListener('scroll',()=>{
    header.classList.toggle('secondary', window.scrollY > 0);
})

refresh= ()=>{
    location.reload()
}