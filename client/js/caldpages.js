
import { LoadInit,LoadHeard } from './pages/pages'


export const callHearder = () => {
LoadHeard({ func: "LoadHearders"});
}

export const callBody = () => {
LoadInit({ func: "loadBody"});
}

