//Primeiro cria-se uma função que recebe um nº faça com que esse nº seja dobrado:

function calcular_Quadrado(numero){
    return numero * numero;

//Agora cria-se outra função para começar a etapa de elevar o nº à quarta potência

}
function calcular_quarta_potencia(numero){ //A função recebe o número e o guarda.
    var quadrado = calcular_Quadrado(numero); //Agora chamamos a antiga função e guardamos o nº na variável quadrado.
    return calcular_Quadrado(quadrado); //Agora, returnamos a antiga função aplicando a sua funcionalidade na variável que definimos.
}

var numeroParaElevar = 4;
var resultado = calcular_quarta_potencia(numeroParaElevar);
console.log(resultado);