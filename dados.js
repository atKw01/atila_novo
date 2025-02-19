var armazem = localStorage;

function salvarDados() {
    const valorAluno = document.getElementById("alunos").value;
    const valorFalta = document.getElementById("faltas").value;
    const valorTurma = document.querySelector("input[name='turma']:checked").value;

    turmaDados.turma.forEach((item) => {
        if (item.nome === valorTurma) {
            item.alunos = valorAluno;
            item.faltas = valorFalta;
        }
    });
    armazem.setItem("turmaDados", JSON.stringify(turmaDados));
};
var turmaDados = {
    "turma": [
        {
            "nome": "sq3",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "qs3",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "tq3",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "sat2",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "sat3",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "sat5",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "pjeQuarta",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "pjeSabado",
            "alunos": 0,
            "faltas": 0,
        },
        {
            "nome": "geral",
            "alunos": 0,
            "faltas": 0,
        },
    ],
    "dataCiclo": [
        {	
            "dia": 0,
            "mes": 0,
            "ano": 0,
        },
        {
            "dia": 0,
            "mes": 0,
            "ano": 0,
        },
    ],
};
document.getElementById("inputTurma").addEventListener("submit", function(event) {
    event.preventDefault();
    salvarDados();
    window.location.href = './exitcode.html';
});