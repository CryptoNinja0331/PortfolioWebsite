
//Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click",function(){
        //when clicked, remove the initial active class
        filterContainer.querySelector(".active").classList.remove("active");
        //then add active to currently clicked
        this.classList.add("active"); //NB: this here is same as filterBtns[i]
        
        const filterValue = this.getAttribute("data-filter");
        for (let f = 0; f < totalPortfolioItem; f++) {
            if(filterValue === portfolioItems[f].getAttribute("data-category")){
                portfolioItems[f].classList.remove("hide");
                portfolioItems[f].classList.add("show");
            }
            else{
                portfolioItems[f].classList.remove("show");
                portfolioItems[f].classList.add("hide");
            }
            if(filterValue === 'all'){
                portfolioItems[f].classList.remove("hide");
                portfolioItems[f].classList.add("show");
            };
        }
    });

};


//Portfolio LightBox
const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".lightbox-counter");
let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click",function(){
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

const nextItem = () => {
    if(itemIndex === totalPortfolioItem-1){
        itemIndex = 0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}

const prevItem = () => {
    if(itemIndex === 0){
        itemIndex = totalPortfolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}

const toggleLightbox = () =>{
    lightbox.classList.toggle("open");
}

const changeItem = () =>{
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex +1) + " of " + totalPortfolioItem;
};

//Close Lightbox
lightbox.addEventListener("click",function(){
    if (event.target === lightboxClose ||event.target === lightbox){
        toggleLightbox();
    }
})





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.my_title1',{}); 
sr.reveal('.my_title2',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 500});
sr.reveal('.about__text2',{delay: 550});
sr.reveal('.about__bio',{delay: 500});
sr.reveal('.education_title',{}); 
sr.reveal('.skill-item',{ interval: 200});
sr.reveal('.about__btn',{ interval: 200});
sr.reveal('.timeline-box',{ interval: 100});

/*SCROLL SERVICES*/
sr.reveal('.section-title',{}); 
sr.reveal('.service-item',{interval: 300}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PORTFOLIO*/
sr.reveal('.portfoilio__filter',{interval: 200}); 
sr.reveal('.portfolio-item',{interval: 400});

/*SCROLL Blog*/
sr.reveal('.blog-item',{interval: 200}); 

