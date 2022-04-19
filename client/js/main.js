import { callHearder, callBody, callLogin, callHprincipal } from './caldpages'



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("heard-index").addEventListener('click', btnClick)
    document.getElementById("body-home").addEventListener('click', btnClick)
    document.getElementById("body-home").addEventListener("input", btnInput)
    document.getElementById("body-home").addEventListener("change", btnChange)

    $("#bar").hide()

})

window.onload = function() {

    callBody()

}






const btnClick = (e) => {

    let inputNome = document.getElementById("username")
    let inputPswd = document.getElementById("password")
    let mensagemL = document.getElementById("msn-login")
    let senhaUser = document.getElementById("rs-user-senha")
    let confSenhaUser = document.getElementById("rs-user-conf-senha")

    if (e.target.matches('#btn_pg_Login')) {

        // $("#bar").show()
        callLogin();
        //$("#title-page").html("Login")
        // $("#bar").hide()
        //alert('Teste clicando em login')

    }

    if (e.target.matches('#btn-login')) {


        if (inputNome.value === "") {

            $(mensagemL).html("O campo e-mail não pode ser em branco...")
            inputNome.value = ""
            inputNome.focus()
            setTimeout(function() {
                $(mensagemL).html("Faça login com sua conta de e-mail")
            }, 5000)
        } else if (inputPswd.value === "") {
            $(mensagemL).html("O campo senha não pode ser em branco...")
            inputPswd.value = ""
            inputPswd.focus()
            setTimeout(function() {
                $(mensagemL).html("Faça login com sua conta de e-mail")
            }, 5000)

        } else {
            loginAut()
        }
    }


}

const loginAut = () => {

    //$("#bar").show()
    const inputNome = document.getElementById("username")
    const inputPswd = document.getElementById("password")
    alert(inputPswd.value);
    var inputs = {
        users: inputNome.value,
        paswds: inputPswd.value
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


    console.log(optRet, pp)
        // alert("optRet:" + optRet + " pp:" + pp)

    if (optRet === pp) {

        localStorage.setItem("token", token)
        localStorage.setItem('nomeuser', nomeUser)
        localStorage.setItem('iduser', iduser)
        localStorage.setItem('email', userEmail)
        localStorage.setItem('permissao', userPremissao)
            // alert("antes do callHprincipal");
            // callManutencao()

        callHprincipal()
        $("#bar").hide()
    } else {
        $(mensagemL).html("Usuário ou senha invalidos.")
        $("#bar").hide()
    }
}

export function cPrincipal() {

    google.script.run.withSuccessHandler(lookPrincipal)

}

function lookPrincipal() {
    alert("lookPrincipal")
    const nomeUsuario = localStorage.getItem('nomeuser')
    const idUsuario = localStorage.getItem('iduser')
    const usEmail = localStorage.getItem('email')
    const usPermis = localStorage.getItem('permissao')



    $("#Nuser").html(nomeUsuario)

    /*$("#iduser").html(idUsuario)
    $("#mail").html(usEmail)
    $("#permis").html(usPermis)*/
}

function retPrincipal() {
    alert("retPrincipal")
    return;
}