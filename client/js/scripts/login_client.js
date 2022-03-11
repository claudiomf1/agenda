export const loginAut = () =>{
  $("#bar").show()
  const inputNome = document.getElementById("username")
  const inputPswd = document.getElementById("password")
  var inputs = {
     users : inputNome.value,
     paswds : inputPswd.value
}
google.script.run.withSuccessHandler(lookLogin).loginSv(inputs)
}

function lookLogin(options) {
  const mensagemL = document.getElementById("msn-login")
  let optRet = options.userRetL
  let iduser = options.userId
  let nomeUser = options.userName
  let userEmail = options.userEmail
  let userPremissao = options.userPermissao
  const token = options.tokenServ
  let pp = options.pp
console.log(optRet,pp)
 if(optRet === pp){
    localStorage.setItem("token", token)
    localStorage.setItem('nomeuser', nomeUser)
    localStorage.setItem('iduser', iduser)
    localStorage.setItem('email',userEmail)
    localStorage.setItem('permissao',userPremissao)
    callManutencao()
    callHprincipal()
    $("#bar").hide()
 }else{
  $(mensagemL).html("Usuário ou senha invalidos.")
  $("#bar").hide()
 }
  }