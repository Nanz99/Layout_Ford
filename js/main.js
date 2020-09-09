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
var prevSlide = document.getElementById("prevSlide");
var nextSlide = document.getElementById("nextSlide");
var imgSlide = document.getElementsByClassName("carousel__item");
var numSlide = 0;

const slideShow = (n) => {
   for (let i = 0; i < imgSlide.length; i++) {
      imgSlide[i].style.display = "none";
   }
   imgSlide[n].style.display = "block";
}
slideShow(0);
prevSlide.addEventListener("click", () => {
   numSlide--;
   if (numSlide < 0) {
      numSlide = 2;
   }
   slideShow(numSlide);
})
nextSlide.addEventListener("click", () => {
   numSlide++;
   if (numSlide > 2) {
      numSlide = 0;
   }
   slideShow(numSlide);
})

// Modal Search 
var searchButton = document.getElementById("searchButton");
var searchModal = document.getElementById("searchPages");
var searchClose = document.querySelector(".search-close");

searchButton.addEventListener("click", function () {
   searchModal.classList.add("search-active");
})

searchClose.addEventListener("click", function () {
   searchModal.classList.remove("search-active");

})

const forHeader = document.getElementById("fordHeader");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 20) {
      forHeader.classList.add("sticky-ford");
   }
   else {
      setTimeout(() => {
         forHeader.classList.remove("sticky-ford");
      }, 300);
   }
})
// back to top
var backToTop = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      backToTop.classList.add("backToTop-active");
   }
   else {
      setTimeout(() => {
         backToTop.classList.remove("backToTop-active");
      }, 200);

   }
});

backToTop.addEventListener("click", () => {
   window.scrollTo(0, 0);
});

// Form Login and Register

var loginBtn = document.getElementById("login");
var registerBtn = document.getElementById("register");
var btn = document.getElementById("btn");

function register() {
   loginBtn.style.left = "-400px";
   registerBtn.style.left = "50px";
   btn.style.left = "110px";
}
function login() {
   loginBtn.style.left = "50px";
   registerBtn.style.left = "450px";
   btn.style.left = "0";
}



// Login System

var arrUser = [
   {
      userName: "nhut",
      passWord: "123"
   },
   {
      userName: "anhnhut",
      passWord: "123"
   }
]

function getInfo(){
   var userName = document.getElementById("userName").value;
   var passWord = document.getElementById("passWord").value;
   var loginModal = document.querySelector(".loginContainer");
   for (let i = 0; i < arrUser.length; i++) {
      if (userName == arrUser[i].userName && passWord == arrUser[i].passWord) {
         loginModal.classList.add("outLogin");
      }
   }
};

function guestMode(){
   var loginModal = document.querySelector(".loginContainer");
   loginModal.classList.add("outLogin");
}