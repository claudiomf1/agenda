

import { callHearder, callBody } from './caldpages'



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("body-home").addEventListener('click', btnClick)
  

 $("#bar").hide()


 
 
 

})

window.onload = function(){
 
  callBody()

}

  /*let    inputNome = document.getElementById("username")
  let    inputPswd = document.getElementById("password")
  let    mensagemL = document.getElementById("msn-login")
  let    senhaUser = document.getElementById("rs-user-senha")
  let    confSenhaUser = document.getElementById("rs-user-conf-senha")*/


  const btnClick = (e) => {

    if(e.target.matches('#btn_pg_Login')){ 

      alert ('Teste clicando em login')
      
      }


  }



