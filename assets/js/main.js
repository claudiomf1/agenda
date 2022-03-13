
import { callHearder, callBody, callLogin, callHprincipal, callManutencao, callRegisterList, callRegisterI, callCdUser, callPedido, callnewPedido } from './caldpages'
import { loginAut } from './login_client'
  


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("body-home").addEventListener('click', btnClick)
  document.getElementById("body-home").addEventListener("input", btnInput)
  document.getElementById("body-home").addEventListener("change", btnChange)

 $("#bar").hide()
 $("#title-page").html("Home MC")
 $("#buttons-pedido").hide()
 

})

window.onload = function(){
     callHearder() 
     callBody()
  
}




let masks = {
  cpf (value){
    return value
    .replace(/\D/g,'')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?/, '$1')
  },
  cnpj (value) {
    return value
    .replace(/\D/g,'')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?/, '$1')
  },
  phone (value) {
    return value
    .replace(/\D/g,'')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?/, '$1')
  },
  cep (value) {
    return value
    .replace(/\D/g,'')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?/, '$1')
  }
}



 const btnClick = (e) => { 

  const inputNome = document.getElementById("username")
  const inputPswd = document.getElementById("password")
  const mensagemL = document.getElementById("msn-login")
  
  const senhaUser = document.getElementById("rs-user-senha")
  const confSenhaUser = document.getElementById("rs-user-conf-senha")

 if(e.target.matches('#btn-lg')){
   $("#bar").show()
   callLogin()
   $("#title-page").html("Login")
   $("#bar").hide()
}

if(e.target.matches('#btn-login')){
 if(inputNome.value === ""){
   $(mensagemL).html("O campo e-mail não pode ser em branco...")
   inputNome.value = "" 
   inputNome.focus()
   setTimeout(function() {
     $(mensagemL).html("Faça login com sua conta de e-mail")
   },5000)
  }else if(inputPswd.value === ""){
   $(mensagemL).html("O campo senha não pode ser em branco...")
   inputPswd.value = "" 
   inputPswd.focus()
   setTimeout(function() {
     $(mensagemL).html("Faça login com sua conta de e-mail")
   },5000)

  }else {
   loginAut()
  }
}
}//fim btn click