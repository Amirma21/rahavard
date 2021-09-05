//!preloader

window.addEventListener("load", ()=>{
    const preloader = document.querySelector(".preloader")
    preloader.classList.add("hidepreloader")
})

//!progressbar

const progress = document.querySelector('.progress-show');

window.addEventListener("scroll", ()=>{  
    const winscroll = window.pageYOffset;

    const height = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrolled = (winscroll / height) * 100;
    
    progress.style.width = `${scrolled}%`;})

    //! go to up button

const goTopBtn = document.querySelector(".go-up-btn")

window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 200) {
        goTopBtn.classList.add("showBtn")
    }else{
        goTopBtn.classList.remove("showBtn")
    }
})











