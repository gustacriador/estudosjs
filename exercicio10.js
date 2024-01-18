function primeironome_e_ultimosobrenome(primeiroNome, ultimoSobrenome){
    var citacao = ultimoSobrenome + ", " + primeiroNome + ".";
    return citacao;
}

var primeiroNome = "Breno";
var ultimoSobrenome = "Santos";

var citacaoBibliografica = primeironome_e_ultimosobrenome(primeiroNome, ultimoSobrenome);
console.log("Citação bibliográfica:", citacaoBibliografica);