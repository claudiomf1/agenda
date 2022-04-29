const deslogUser = () =>{

  let dataLogger = wud //data
  let dataLogin = wul //login
  let lr = dataLogin.getLastRow()
 

  const result = dataLogger.getRange("C2").getValue()

  dataLogger.getRange("A2").activate()
  dataLogger.getActiveRangeList().setNumberFormat('@')
  dataLogger.getActiveRangeList().setNumberFormat('#,##0.00')

  dataLogger.getRange("B2").activate()
  dataLogger.getActiveRangeList().setNumberFormat('@')
  dataLogger.getActiveRangeList().setNumberFormat('#,##0.00')

  if(result === true ){

    return "Logado" 

  }else{

   
    dataLogger.getRange("B2").setValue(dateAm)

    dataLogger.getRange("B2").activate()
    dataLogger.getActiveRangeList().setNumberFormat('@')
    dataLogger.getActiveRangeList().setNumberFormat('#,##0.00')




    for (let i = 2; i <= lr; i++ ){
      
      let dateLog = dataLogin.getRange(i, 5).getValue()
      let dateDeslog = dataLogin.getRange(i, 6).getValue()
      
                    

      let diffInTime = Math.abs(dateDeslog - dateLog)
     

      if( dataLogin.getRange(i, 4).getValue() === "On"){

        dataLogin.getRange(i, 6).setValue(tUsaH)
        dataLogin.getRange(i, 7).setValue(diffInTime)

      }
      
    }
    
    dataLogin.getRange('D2:D').activate()
    dataLogin.getActiveRangeList().setValue("Off")

    return "Deslogou" 


    

  }

 }
