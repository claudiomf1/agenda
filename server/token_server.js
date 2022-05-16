const TokenStatus = (token) => {
  const bdlogin = wul
  const dataToken = bdlogin.getRange(2, 3, bdlogin.getLastRow() - 1, 3).getValues()

  dataToken.filter((check, index) => {

      if (check[0] === token) {

          userTokeIndex = index +1
          
          return true 

      } else {

        return false 
      }
  });


  if(userTokenIndex !== -1){

      return {retToken: true } 

  }else{
      return {retToken: true } 
  }
  
}