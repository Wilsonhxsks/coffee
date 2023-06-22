//styling nav
let nav = document.querySelector("nav");
let ul = document.querySelector(".nav");
let li = document.querySelectorAll(".nav li");
console.log(ul)
nav.addEventListener("click",()=>{
    ul.classList.toggle("display");
    console.log(ul)
})
console.log(nav)
//buttoms
let home = document.querySelector(".nav li");
let about = home.nextElementSibling;
let products = about.nextElementSibling;
let store = products.nextElementSibling;
let lis = document.querySelectorAll(".nav li")
lis.forEach((ele) =>{
    ele.addEventListener("click",(e)=>{
        lis.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})
about.addEventListener("click",()=>{
    window.open("./about.html","_self")
})

products.addEventListener("click",()=>{
    window.open("./products.html","_self")
})

store.addEventListener("click",()=>{
    window.open("./store.html","_self")
})
//styling footer
let footer = document.querySelector("footer")
let date = new Date()
footer.textContent+=date.getFullYear()
