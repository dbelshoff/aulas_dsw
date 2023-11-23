// Simulado para a prova
// Aluno: Diogo Francis Belshoff
// Matrícula: 202310293

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

// Variável para controlar o término do programa
var terminar = false;

// Contador de usuários
var i = 0;

// Loop para inserir usuários
while (!terminar) {
    console.log(`Usuário ${i + 1}:`);

    // Solicitar peso e altura do usuário
    var peso = parseFloat(prompt(`Digite o peso do usuário ${i + 1} em kg:`));
    var altura = parseFloat(prompt(`Digite a altura do usuário ${i + 1} em metros:`));

    // Calcular o IMC e classificar
    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc);

    // Exibir resultados
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
    console.log("\n");

    // Perguntar se deseja inserir outro usuário
    var resposta = prompt(`Deseja inserir outro usuário? S / N `);

    // Se a resposta for 'N', terminar o programa
    if (resposta.toUpperCase() === 'N') {
        terminar = true;
    }

    // Incrementar o contador de usuários
    i++;
}
