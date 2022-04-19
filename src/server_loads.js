const loadBody = () => {
    return loadPartialHTML("page-body-index");
}

const LoadHearders = () => {
    return loadPartialHTML("page-header-index");
}

const loadLogin = () => {
    return loadPartialHTML("page-login");
}

const loadHeaderAdmin = () => {
    alert("loadHeaderAdmin");
    return loadPartialHTML("page-header-main-dash");
}