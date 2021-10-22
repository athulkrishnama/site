const togglebut =document.getElementsByClassName("togglebut")[0]
const navbar=document.getElementsByClassName("navbar")[0]

togglebut.addEventListener('click',()=>{
    navbar.classList.toggle('active')

})