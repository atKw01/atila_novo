var armazem = localStorage;

function salvarDados() {
    const valorAluno = Number(document.getElementById("alunos").value);
    const valorFalta = Number(document.getElementById("faltas").value);
    const valorTurma = document.querySelector("input[name='turma']:checked").value;
    const valorMateria = document.querySelector("input[name='materia']:checked").value;

    turmaDados.turma.forEach((item) => {
        if (item.nome === valorTurma) {
            item.alunos = valorAluno;
            item.faltas = valorFalta;
            item.materia = valorMateria;
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
            "materia": "",
        },
        {
            "nome": "qs3",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "tq3",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "sat2",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "sat3",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "sat5",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "pjeQuarta",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
        },
        {
            "nome": "pjeSabado",
            "alunos": 0,
            "faltas": 0,
            "materia": "",
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