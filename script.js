let left = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector(".container");

left.addEventListener("mouseover", ()=> {
    container.classList.add("hover-left");
})
left.addEventListener("mouseout", ()=> {
    container.classList.remove("hover-left");
})

right.addEventListener("mouseover", ()=> {
    container.classList.add("hover-right");
})
right.addEventListener("mouseout", ()=> {
    container.classList.remove("hover-right");
})