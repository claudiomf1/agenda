function include(callsrc){
  return HtmlService.createHtmlOutputFromFile(callsrc).getContent()
    }
 
      
function render(file, argoObject) {
  var template = HtmlService.createTemplateFromFile(file); //chama o html para o doGet
  if (argoObject) {
      var keys = Object.keys(argoObject);

      keys.forEach(function (key) {
          template[key] = argoObject[key];
      });
  } //end if
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // retorna os valores para o html
}