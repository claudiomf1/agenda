

import { callHearder, callBody } from './caldpages'



document.addEventListener("DOMContentLoaded", function() {
  //document.getElementById("body-home").addEventListener('click', btnClick)
  

 $("#bar").hide()

 var MenuItems = document.getElementById("MenuItems");

 MenuItems.style.maxHeight = "0px";

 function menutoggle() {
     if (MenuItems.style.maxHeight == "0px") {
         MenuItems.style.maxHeight = "200px";
     }
     else {
         MenuItems.style.maxHeight = "0px";
     }
 }

 
 

})

  /*let    inputNome = document.getElementById("username")
  let    inputPswd = document.getElementById("password")
  let    mensagemL = document.getElementById("msn-login")
  let    senhaUser = document.getElementById("rs-user-senha")
  let    confSenhaUser = document.getElementById("rs-user-conf-senha")*/


window.onload = function(){
 
     callBody()
  
}



