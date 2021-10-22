const togglebut =document.getElementsByClassName("togglebut")[0]
const navbar=document.getElementsByClassName("navbar")[0]

togglebut.addEventListener('click',()=>{
    navbar.classList.toggle('active')

})
var i = 0;
var txt = 'Welcome';
var speed = 300;

    typeWriter()
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hlo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
