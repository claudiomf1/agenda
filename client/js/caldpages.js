import { LoadInit, LoadHeard, LoadFooter, LoadHprincipal } from './pages/pages'
import { cPrincipal } from './main'

export const callHearder = () => {
    LoadHeard({ func: "LoadHearders" });
}

export const callBody = () => {
    LoadInit({ func: "loadBody", });
}

export const callLogin = () => {
    LoadInit({ func: "loadLogin" });
    //$("#body-init").hide()
}

export const callHprincipal = () => {

    LoadHeard({ func: "loadHeaderAdmin" /* , callback: cPrincipal() */ });

}

export const callManutencao = () => {
    LoadInit({ func: "loadManutencao" });
}