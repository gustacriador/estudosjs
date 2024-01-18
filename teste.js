function calculo_da_media(valor1, valor2, valor3) {
    var media = (valor1 + valor2 + valor3) / 3;
    return media;
}

function maiorquea_Media(valor1, valor2, valor3) {
    var maiorValor = calculo_da_media(valor1, valor2, valor3);

    if (valor1 > maiorValor && valor2 > maiorValor && valor3 > maiorValor) {
        return "Os 3 valores sÃ£o maiores que a mÃ©dia entre eles.";
    }

    if (valor1 > maiorValor || valor2 > maiorValor || valor3 > maiorValor) {
        return "Pelo menos 2 valores sÃ£o maiores que a mÃ©dia entre eles.";
    } else {
        return "Menos de dois valores sÃ£o maiores que a mÃ©dia entre eles.";
    }
}

var valor1 = 2;
var valor2 = 4;
var valor3 = 6;
var resultado = maiorquea_Media(valor1, valor2, valor3);
console.log(resultado);