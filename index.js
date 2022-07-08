// hembergur menu js 
const mobile_nav=document.querySelector(".mobile-navbar-btn")
const nav_header=document.querySelector(".header")

const toggleNavbar=()=>{
    nav_header.classList.toggle("active")
}

mobile_nav.addEventListener('click',()=>toggleNavbar());





var acc =document.getElementsByClassName('accordion');
var i;
var len=acc.length
for(i=0;i<len;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active1');
        var panel= this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })

    
}




// popup login form 
document.getElementById("login-button").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex";
})
document.querySelector(".popup-close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
})





// popup login form in signup form
// document.getElementById("signup-popup-init").addEventListener("click",function(){
//     document.querySelector(".popup-signup-two").style.display ="flex";
// })
// document.querySelector(".signup-close-two").addEventListener("click",function(){
//     document.querySelector(".popup-signup-two").style.display ="none";
// })






// popup Sign In form 
document.getElementById("Signin-button").addEventListener("click",function(){
    document.querySelector(".popup-signup").style.display ="flex";
})
document.querySelector(".popup-close1").addEventListener("click",function(){
    document.querySelector(".popup-signup").style.display ="none";
})





// popup Sign In form2 
document.getElementById("Signin-button2").addEventListener("click",function(){
    document.querySelector(".two").style.display ="flex";
})
document.querySelector(".close-two").addEventListener("click",function(){
    document.querySelector(".two").style.display ="none";
})
