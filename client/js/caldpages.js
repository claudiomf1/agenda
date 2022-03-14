
import { LoadInit,LoadHeard,LoadFooter, LoadHprincipal,} from './pages/pages'


export const callHearder = () => {
LoadHeard({ func: "LoadHearders"});
}

export const callBody = () => {
LoadInit({ func: "loadBody"});
}
