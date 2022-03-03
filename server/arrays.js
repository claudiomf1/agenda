Array.prototype.pesquisa = function(Procura){
  if(Procura == "") return false;
  for (var Linha=0; Linha<this.length; Linha ++)
  if (this[Linha]==Procura) return Linha;
  return -1
}