//Accordion
const disclosureHeadings = document.getElementById("disclosures__heading");
const accordionItemBody = document.getElementById("disclosures__content");
const xoayArrow = document.getElementById("arrD");
disclosureHeadings.addEventListener("click", (e) => {

   disclosureHeadings.classList.toggle("active");
   if (disclosureHeadings.classList.contains("active")) {
      accordionItemBody.style.maxHeight = "240px";
      // xoayArrow.style.transform = "rotate(180deg)";
      xoayArrow.innerHTML = "remove";
      xoayArrow.style.transition = "all 0.3s";
   }
   else {
      accordionItemBody.style.maxHeight = 0;
      // xoayArrow.style.transform = "rotate(0)";
      xoayArrow.innerHTML = "add";
      xoayArrow.style.transition = "all 0.3s";
   }

});

// Carousel

var imgSlide = document.getElementsByClassName("carousel__item");
var numSlide = 0;

const prevSlide = () => {
   numSlide--;
   if (numSlide < 0) {
      numSlide = 2;
   }
   slideShow(numSlide);
}
const nextSlide = () => {
   numSlide++;
   if (numSlide > 2) {
      numSlide = 0;
   }
   slideShow(numSlide);
}

const slideShow = (n) => {
   for (let i = 0; i < imgSlide.length; i++) {
      imgSlide[i].style.display = "none";
   }
   imgSlide[n].style.display = "block";
}
slideShow(0);


// Modal Search 
var searchButton = document.getElementById("searchButton");
var searchModal = document.getElementById("searchPages");
var searchClose = document.querySelector(".search-close");

searchButton.addEventListener("click",function(){
   searchModal.classList.add("search-active");
})

searchClose.addEventListener("click",function(){
   searchModal.classList.remove("search-active");

})



$(window).on('scroll', function () {
   if ($(window).scrollTop()) {
      $('#fordHeader').addClass('sticky-ford');
   }
   else {
      $('#fordHeader').removeClass('sticky-ford');
   }
});
// back to top
var backToTop = document.querySelector(".backToTop");
window.addEventListener("scroll",() => {
   if(window.pageYOffset > 250){
      backToTop.classList.add("backToTop-active");
   }
   else{
      setTimeout(() => {
         backToTop.classList.remove("backToTop-active");
      },200);
     
   }
})

backToTop.addEventListener("click",() => {
   window.scrollTo(0,0);
})