const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".navUl");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // as soon as you click on the hambuerguer, we want to activate the class that is going to turn the burguer into an X, and below we want to activte that is going to show the 
    navUl.classList.toggle("active"); // 
})

// when we open the slide menu and click on one of the links, we want the slide nav bar to close:

document.querySelectorAll(".navLi").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navUl.classList.remove("active");
}))