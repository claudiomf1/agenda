const loginSv = (inputs) => {
    const tokenServ = Math.random().toString(16).substr(2) + Math.random().toString(7).substr(2)
    const status = "Ativo"
    const bduser = wus
    const bdlogin = wul
    const nomeuser = inputs.users
    let psword = inputs.paswds
    console.log(nomeuser, psword, status)
    const ultLinhaLog = bdlogin.getLastRow() - 1
    const idLg = ultLinhaLog
    let userDataIndex = -1
    let logado = "On"

    let len
    let p = 0
    let i
    senhaLogin = ""


    for (i = 0; i < psword.length; i++) {
        p++

        len = (ASC(psword.substr(i, 1)) + (ASC(chave.substr(p, 1))))

        if (p === 50) {
            p = 1
        }
        if (len > 256) {
            len += 256
        }
        senhaLogin += (CHAR(len))
    }

    Logger.log("Senha Login " + senhaLogin)


    const dataUser = bduser.getRange(2, 1, bduser.getLastRow() - 1, 7).getValues()


    let userData = dataUser.filter((check, index) => {
        if (check[1] === nomeuser && check[3] === senhaLogin && check[6] === status) {
            userDataIndex = index + 1

            return true;
        } else {

            return false;
        }
    });


    if (userDataIndex !== -1) {
        const idUsers = userData[0][0]
        const nome = userData[0][2]
        const email = userData[0][1]
        const permissao = userData[0][4]
        const sucess = "sucess"
        bdlogin.appendRow([
            idLg,
            idUsers,
            tokenServ,
            logado,
            todayT

        ])
        return {
            userId: idUsers,
            userName: nome,
            userEmail: email,
            userPermissao: permissao,
            userRetL: sucess,
            pp: sucess,
            tokenServ: tokenServ,
        }
    } else {
        const retP = "faliedr"
        return {
            userRetL: retP,
        }
    }

}

const TokenStatus = (token) => {
    const bdlogin = wul
    const dataToken = bdlogin.getRange(2, 3, bdlogin.getLastRow() - 1, 3).getValues()

    dataToken.filter((check, index) => {

        if (check[0] === token) {
            
            
            return { retToke: true }

        } else {

          return { retToke: false }
        }
    });
    
}