
import { LoadInit,LoadHeard,LoadFooter, LoadHprincipal,} from './pages/pages'


export const callHearder = () => {
LoadHeard({ func: "LoadHearders"});
}

export const callBody = () => {
LoadInit({ func: "loadBody"});
}

export const callLogin = () => {
  LoadInit({ func: "loadLogin"});
$("#body-init").hide()
}

export const callHprincipal = () => {
  LoadHeard({ func: "loadHeaderAdmin",callback: cPrincipal()});
}

export const callManutencao = () => {
  LoadInit({ func: "loadManutencao"});
}
export const callRegisterList = () => {
  LoadInit({ func: "loadListCadastro",callback: setDataForSearchCd()});
}
export const callRegisterI = () => {
  LoadInit({ func: "loadCadastro"});
}
export const callCdUser = () => {
  LoadInit({ func: "loadUser",callback: cmbUSer()});
}
export const callPedido = () => {
  LoadInit({ func: "loadPedido",callback: setDataForSearchPe()});
}
export const callnewPedido = () => {
  LoadInit({ func: "loadnewPedido",callback: initPedido()});
}