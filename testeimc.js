function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var contador = 0;
var somaIMC = 0;
var terminar = false;

while (!terminar) {
    contador++;
    var peso = parseFloat(prompt(`Digite o seu peso: `));
    var altura = parseFloat(prompt(`Digite sua altura:`));
    var imc = calcularIMC(peso, altura);
    alert(`Seu IMC é: ${imc}`);
    somaIMC += imc;
    var continuar = prompt(`Deseja continuar? s / n`).toUpperCase();

    if (continuar === 'N') {
        terminar = true;
    } else if (continuar === 'S') {
        terminar = false;
    } else {
        alert("Opção inválida. O programa será encerrado.");
        terminar = true;
    }
}

var mediaIMC = somaIMC / contador;
alert(`A média dos IMCs calculados é: ${mediaIMC}`);
