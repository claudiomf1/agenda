
import { callHearder, callBody, callLogin, callHprincipal, callManutencao, callRegisterList, callRegisterI, callCdUser, callPedido, callnewPedido } from './caldpages'
import { btnClick} from './scripts/login_client'

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

