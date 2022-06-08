var menuBtn = document.getElementById ("menu-btn");
var menu = document.getElementById ("menu");

menuBtn.onclick = function() {
   if(menu.style.transform == "scale(0)"){
      menu.style.transform = "scale(1)"
   }else{
      menu.style.transform = "scale(0)"
   }
}