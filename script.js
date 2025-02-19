var armazem = localStorage; 
var turmaDados = JSON.parse(armazem.getItem("turmaDados"));


function salvarDatas() {
    var elementInicio = document.getElementById("dataInicio");
    var elementFim = document.getElementById("dataFim");
    var elementInicioId = elementInicio.id;
    var elementFimId = elementFim.id; 

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

document.getElementById("inputData").addEventListener("submit", function(event) {
    event.preventDefault();
    salvarDatas();
    alert("Datas salvas com sucesso!");

});

window.onload = function() {console.log(turmaDados)};

/*oi bb, como vai? então, a presença ela funciona da seguinte forma: 
Nós temos o total de alunos  na turma e depois nós temos o total de alunos que vieram no dia, 
nisso nós tiramos a porcentagem*/