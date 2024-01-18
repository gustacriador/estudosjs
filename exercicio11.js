function calculo_da_media(valor1, valor2, valor3){
    var media = (valor1 + valor2 + valor3)/3;
    return media;
}

function maiorquea_Media(valor1, valor2, valor3){
    var maiorValor = calculo_da_media(valor1, valor2, valor3);

    if (valor1 > maiorValor && valor2 > maiorValor && valor3 > maiorValor){
        return "Os 3 valores são maiores que a média entre eles.";
    }
    if ((valor1 > maiorValor && valor2 > maiorValor) || (valor1 > maiorValor && valor3 > maiorValor) ||
        valor2 > maiorValor && valor3 > maiorValor){
            return "2 valores são maiores que a média entre eles.";
        } else {
            return "Menos de dois valores são maiores que a média entre eles.";
        }
}

var v1 = 2;
var v2 = 3;
var v3 = 6;
var resultado = maiorquea_Media(valor1, valor2, valor3);
console.log(resultado);