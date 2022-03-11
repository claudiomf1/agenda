import { loginAut } from './login_client'


export const btnClick = (e) => { 

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