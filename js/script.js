//!preloader

window.addEventListener("load", ()=>{
    const preloader = document.querySelector(".preloader")
    preloader.classList.add("hidepreloader")
})

//!progressbar

const progress = document.querySelector('.progress-show');
console.log(progress);


window.addEventListener("scroll", ()=>{  
    const winscroll = window.pageYOffset;

    const height = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrolled = (winscroll / height) * 100;
    
    progress.style.width = `${scrolled}%`;})







