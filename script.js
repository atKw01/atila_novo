var armazem = localStorage; 
var turmaDados = JSON.parse(armazem.getItem("turmaDados"));


function salvarDatas() {
    //var elementInicio = document.getElementById("dataInicio");
    //var elementFim = document.getElementById("dataFim");
    //var elementInicioId = elementInicio.id;
    //var elementFimId = elementFim.id; 

    const valorDataInicio = new Date(document.getElementById("dataInicio").value);
    const valorDataFim = new Date(document.getElementById("dataFim").value);

    const valorInicioDia = valorDataInicio.getDate()+1;
    const valorInicioMes = valorDataInicio.getMonth()+1;
    const valorInicioAno = valorDataInicio.getFullYear();

    const valorFimDia = valorDataFim.getDate()+1;
    const valorFimMes = valorDataFim.getMonth()+1;
    const valorFimAno = valorDataFim.getFullYear();

    turmaDados.dataCiclo[0].dia = valorInicioDia;
    turmaDados.dataCiclo[0].mes = valorInicioMes;
    turmaDados.dataCiclo[0].ano = valorInicioAno;

    turmaDados.dataCiclo[1].dia = valorFimDia;
    turmaDados.dataCiclo[1].mes = valorFimMes;
    turmaDados.dataCiclo[1].ano = valorFimAno;

    
    armazem.setItem("turmaDados", JSON.stringify(turmaDados));
};

function contarDias(start, end, weekday) {
    let count = 0;
    let current = new Date(start);

    while (current <= end) {
        if (weekday.includes(current.getDay())) {
            count++;
        }
        current.setDate(current.getDate() + 1);
    }
    return count;
};

function checarDiasDataCiclo(turma) {
    const dataInicio = new Date(turmaDados.dataCiclo[0].ano, turmaDados.dataCiclo[0].mes - 1, turmaDados.dataCiclo[0].dia);
    const dataFim = new Date(turmaDados.dataCiclo[1].ano, turmaDados.dataCiclo[1].mes - 1, turmaDados.dataCiclo[1].dia);


    const dias = contarDias(dataInicio, dataFim, turma);
    return dias;
}

function checarTurma() {
    let totalDias = 0;
    turmaDados.turma.forEach((item) => {
        if (item.alunos > 0 || item.faltas > 0 && item.materia === "ge") {
            if (item.nome.startsWith("sq")) {
                totalDias += checarDiasDataCiclo([3]);
            };
            if (item.nome.startsWith("qs")) {
                totalDias += checarDiasDataCiclo([1]);
            };
            if (item.nome.startsWith("tq")) {
                totalDias += checarDiasDataCiclo([4]);
            };
            if (item.nome.startsWith("pjeQuarta")) {
                totalDias += checarDiasDataCiclo([3]);
            };
            if (item.nome.startsWith("pjeSabado")) {
                totalDias += checarDiasDataCiclo([6]);
            };
            if (item.nome.startsWith("sat")) {
                totalDias += checarDiasDataCiclo([6]);
            };
        };
        if (item.alunos > 0 || item.faltas > 0 && item.materia === "ing") {
            if (item.nome.startsWith("sq")) {
                totalDias += checarDiasDataCiclo([1]);
            };
            if (item.nome.startsWith("qs")) {
                totalDias += checarDiasDataCiclo([3]);
            };
            if (item.nome.startsWith("tq")) {
                totalDias += checarDiasDataCiclo([2]);
            };
            if (item.nome.startsWith("sat")) {
                totalDias += checarDiasDataCiclo([6]);
            };
        };
    });
    return totalDias;
};

function calculo() {
    let totalPresenca = 0;
    turmaDados.turma.forEach((item) => {
        if (item.alunos > 0 || item.faltas > 0) {
            const dias = checarTurma();
            const presenca = ((item.alunos - item.faltas) / item.alunos) * 100;
            totalPresenca += String(presenca).padStart(2, "0");
        };
    });
    return totalPresenca;
};

document.getElementById("inputData").addEventListener("submit", function(event) {
    event.preventDefault();
    salvarDatas();
    alert(calculo());

});

window.onload = function() {console.log(turmaDados)};

/*oi bb, como vai? então, a presença ela funciona da seguinte forma: 
Nós temos o total de alunos  na turma e depois nós temos o total de alunos que vieram no dia, 
nisso nós tiramos a porcentagem*/