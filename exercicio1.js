function calcular_Area_Retangulo(aresta1, aresta2){
    if (aresta1 <= 0 || aresta2 <= 0) {
        return "Valores inválidos. Certifique-se de fornecer números positivos"
    }

    const area = aresta1 * aresta2
    return area;
}

const aresta1 = 5;
const aresta2 = 8;
const valor_area_retangulo = calcular_Area_Retangulo(aresta1, aresta2);

console.log("A área do retângulo é: " + valor_area_retangulo); 