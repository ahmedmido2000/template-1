let list=Array.from(document.querySelectorAll(".list ul li a"))
window.onscroll= function(){
list.forEach((a)=>{
    if(window.scrollY>630){
        a.style.color="black"
        a.style.fontWeight="bold"
    }
    else{
        a.style.color="#fff"
        a.style.fontWeight="normal"
    }
})
}

let menu=document.getElementById("menu")
let nav =document.querySelector(".sec-list")
menu.onclick=function(){
    if(nav.style.display==="none"){
        nav.style.display="block"
    }
    else{
        nav.style.display="none"
    }
}