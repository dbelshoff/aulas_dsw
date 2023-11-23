function adicionarLinhaTabela(nome, nota1, nota2, totalHoras, totalFaltas, resultado) {
    // Obtém a referência da tabela
    var tabela = document.querySelector("table");

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow();

    // Adiciona células para cada informação do aluno
    var celulaNome = novaLinha.insertCell(0);
    celulaNome.innerHTML = nome;

    var celulaNota1 = novaLinha.insertCell(1);
    celulaNota1.innerHTML = nota1;

    var celulaNota2 = novaLinha.insertCell(2);
    celulaNota2.innerHTML = nota2;

    var celulaTotalHoras = novaLinha.insertCell(3);
    celulaTotalHoras.innerHTML = totalHoras;

    var celulaTotalFaltas = novaLinha.insertCell(4);
    celulaTotalFaltas.innerHTML = totalFaltas;

    var celulaResultado = novaLinha.insertCell(5);
    celulaResultado.innerHTML = resultado;
}

// Função para calcular aprovação
function calcularAprovacao() {
    // Loop para garantir que todos os campos estejam preenchidos
    while (true) {
        var nome = document.getElementById("textoInput1").value;
        var nota1 = parseFloat(document.getElementById("textoInput2").value);
        var nota2 = parseFloat(document.getElementById("textoInput3").value);
        var totalHorasAula = parseFloat(document.getElementById("textoInput4").value);
        var totalFaltas = parseFloat(document.getElementById("textoInput5").value);

        // Verifica se algum campo está vazio
        if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(totalHorasAula) || isNaN(totalFaltas)) {
            alert("Por favor, preencha todos os campos antes de verificar a aprovação.");
            return; // Retorna sem calcular se algum campo estiver vazio
        }

        var media = (nota1 + nota2) / 2;
        var porcentagemFaltas = (totalFaltas / totalHorasAula) * 100;

        if (media >= 7 && porcentagemFaltas < 25) {
            adicionarLinhaTabela(nome, nota1, nota2, totalHorasAula, totalFaltas, "Aprovado!");
        } else if (media < 7 && porcentagemFaltas < 25) {
            adicionarLinhaTabela(nome, nota1, nota2, totalHorasAula, totalFaltas, "Reprovado por nota!");
        } else if (media < 7 && porcentagemFaltas > 25) {
            adicionarLinhaTabela(nome, nota1, nota2, totalHorasAula, totalFaltas, "Reprovado por nota e por falta!");
        } else if (media > 7 && porcentagemFaltas > 25) {
            adicionarLinhaTabela(nome, nota1, nota2, totalHorasAula, totalFaltas, "Reprovado por falta!");
        }

        break;
    }
}

// Chamada da função após o clique do botão
function verificarAprovacao() {
    calcularAprovacao();
}
