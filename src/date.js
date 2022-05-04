var todayT = Utilities.formatDate(new Date(), "GMT-0300", "yyyy/MM/dd' 'HH:mm:ss");
var today = Utilities.formatDate(new Date(), "GMT-0300", "yyyy/MM/dd");

var Ano = Utilities.formatDate(new Date(), "GMT-0300", "yyyy");
var Mes = Utilities.formatDate(new Date(), "GMT-0300", "MM");
var Dia = Utilities.formatDate(new Date(), "GMT-0300", "dd");
var horaminut = Utilities.formatDate(new Date(), "GMT-0300", "HH:mm:ss");

var tUsaH = Utilities.formatDate(new Date(), "GMT-0300", "yyyy-MM-dd' 'HH:mm:ss")

var dateAm = new Date();

var diaSemanaTexto = new Date()

switch (diaSemanaTexto) {
    case 0:
        diaSemanaTexto = "Domingo";
        break;

    case 1:
        diaSemanaTexto = "Segunda";
        break;
    case 2:
        diaSemanaTexto = "Terça";
        break;
    case 3:
        diaSemanaTexto = "Quarta";
        break;
    case 4:
        diaSemanaTexto = "Quinta";
        break;
    case 5:
        diaSemanaTexto = "Sexta";
        break;
    case 6:
        diaSemanaTexto = "Sabado";
        break;
}