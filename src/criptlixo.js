function cripttext() {
  
  let psword = ''
  let len
  let p = 0
  let i
 
  for (i = 0; i < psword.length; i ++){
    p++
 
    len = (ASC(psword.substr(i,1)) + (ASC(chave.substr(p,1))))
 
    if (p === 50) {
      p = 1
    }
    if (len > 255){
      len -= 256
    }
    senha += (CHAR(len))
  }
 
 Logger.log(senha)
 
 }
 
 function discript(){
  let psword = ''
  let len
  let p = 0
  let i
  let senhaLo = ""
 
  for (i = 0; i < psword.length; i ++){
    p++
 
    len = (ASC(psword.substr(i,1)) - (ASC(chave.substr(p,1))))
 
    if (p === 50) {
      p = 0
    }
    if (len < 0){
      len += 256
    }
    senhaLo += (CHAR(len))
  }
 
 Logger.log(senhaLo)
 
 
 
 
 }