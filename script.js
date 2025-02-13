document.getElementById("inputTurma").addEventListener("submit", function(event) {
    event.preventDefault();
    const dataInicio = document.getElementById("dataInicio").value;
    const dataFim = document.getElementById("dataFim").value;
    const alunosTurma = document.getElementById("alunosTurma").value;
    const alunosEntrar = document.getElementById("alunosEntrar").value;
    const dataEntrar = document.getElementById("dataEntrar").value;
    const turma = document.querySelector('input[name="turma"]:checked').value;
    const faltas = document.getElementById("faltas").value;

    console.log('Data Início:', dataInicio);
    console.log('Data Fim:', dataFim);
    console.log('Alunos na Turma:', alunosTurma);
    console.log('Alunos a Entrar:', alunosEntrar);
    console.log('Data a Entrar:', dataEntrar);
    console.log('Turma:', turma);

    var [year, month, day] = dataEntrar.split('-').map(Number);
    var dataAlunoEntrar = new Date(year, month - 1, day); // month is 0-indexed
    var dataFormatada = dataAlunoEntrar.toLocaleDateString('pt-BR');
    console.log('Data a Entrar:', dataFormatada);

    var [year, month, day] = dataInicio.split('-').map(Number);
    var dataInicioRaw = new Date(year, month - 1, day);
    var dataInicioClean = dataInicioRaw.toLocaleDateString('pt-BR');

    var [year, month, day] = dataFim.split('-').map(Number);
    var dataFimRaw = new Date(year, month - 1, day);
    var dataFimClean = dataFimRaw.toLocaleDateString('pt-BR');
    
    function countDays(startDate, endDate, daysOfWeek) {
        let count = 0;
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            if (daysOfWeek.includes(currentDate.getDay())) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return count;
    };

    let diasTotais;
    let diasPresença


    if(turma == 'sq2' || turma == 'qs3') {
        const diasDeClasse = countDays(dataInicioRaw, dataFimRaw, [1, 3]);

        diasTotais = diasDeClasse * alunosTurma;

        if(alunosEntrar && dataEntrar) {
            if(dataAlunoEntrar >= dataInicioRaw && dataAlunoEntrar <= dataFimRaw) {
                const diasNovosAlunos = countDays(dataAlunoEntrar, dataFimRaw, [1, 3]);
                diasTotais += diasNovosAlunos * alunosEntrar;
                diasPresença = diasTotais - faltas;
                console.log(diasTotais)
            }
        } else {
            diasPresença = diasTotais - faltas;
        };
        console.log(countDays(dataInicioRaw, dataFimRaw, [1, 3]));

        if(diasTotais > 0){
            const percentual = (diasPresença * 100) / diasTotais;
            const percentualFixed = percentual.valueOf().toFixed(2);
            document.getElementById("attendance").innerHTML = "A frequência da turma é de " + percentualFixed + "%";

        }
    };
    if(turma == 'tq2' || turma == 'tq3') {
        const diasDeClasse = countDays(dataInicioRaw, dataFimRaw, [2, 5]);

        diasTotais = diasDeClasse * alunosTurma;

        if(alunosEntrar && dataEntrar) {
            if(dataAlunoEntrar >= dataInicioRaw && dataAlunoEntrar <= dataFimRaw) {
                const diasNovosAlunos = countDays(dataAlunoEntrar, dataFimRaw, [2, 5]);
                diasTotais += diasNovosAlunos * alunosEntrar;
                diasPresença = diasTotais - faltas;
                console.log(diasTotais)
            }
        } else {
            diasPresença = diasTotais - faltas;
        };
        console.log(countDays(dataInicioRaw, dataFimRaw, [2, 5]));

        if(diasTotais > 0){
            const percentual = (diasPresença * 100) / diasTotais;
            const percentualFixed = percentual.valueOf().toFixed(2);
            document.getElementById("attendance").innerHTML = "A frequência da turma é de " + percentualFixed + "%";

        }
    };
    if(turma == 'sat2' || turma == 'sat3' || turma == 'sat5' || turma == 'pjeSabado') {
        const diasDeClasse = countDays(dataInicioRaw, dataFimRaw, [6]);

        diasTotais = diasDeClasse * alunosTurma;

        if(alunosEntrar && dataEntrar) {
            if(dataAlunoEntrar >= dataInicioRaw && dataAlunoEntrar <= dataFimRaw) {
                const diasNovosAlunos = countDays(dataAlunoEntrar, dataFimRaw, [6]);
                diasTotais += diasNovosAlunos * alunosEntrar;
                diasPresença = diasTotais - faltas;
                console.log(diasTotais)
            }
        } else {
            diasPresença = diasTotais - faltas;
        };
        console.log(countDays(dataInicioRaw, dataFimRaw, [6]));

        if(diasTotais > 0){
            const percentual = (diasPresença * 100) / diasTotais;
            const percentualFixed = percentual.valueOf().toFixed(2);
            document.getElementById("attendance").innerHTML = "A frequência da turma é de " + percentualFixed + "%";

        };
    };
    if(turma == 'pjeQuarta') {
        const diasDeClasse = countDays(dataInicioRaw, dataFimRaw, [3]);

        diasTotais = diasDeClasse * alunosTurma;

        if(alunosEntrar && dataEntrar) {
            if(dataAlunoEntrar >= dataInicioRaw && dataAlunoEntrar <= dataFimRaw) {
                const diasNovosAlunos = countDays(dataAlunoEntrar, dataFimRaw, [3]);
                diasTotais += diasNovosAlunos * alunosEntrar;
                diasPresença = diasTotais - faltas;
                console.log(diasTotais)
            }
        } else {
            diasPresença = diasTotais - faltas;
        };
        console.log(countDays(dataInicioRaw, dataFimRaw, [3]));

        if(diasTotais > 0){
            const percentual = (diasPresença * 100) / diasTotais;
            const percentualFixed = percentual.valueOf().toFixed(2);
            document.getElementById("attendance").innerHTML = "A frequência da turma é de " + percentualFixed + "%";

        }
    };
    /*if(turma == 'geral') {
        const diasDeClasse = countDays(dataInicioRaw, dataFimRaw, [1, 2, 3, 4, 5, 6]);

        diasTotais = diasDeClasse * alunosTurma;

        if(alunosEntrar && dataEntrar) {
            if(dataAlunoEntrar >= dataInicioRaw && dataAlunoEntrar <= dataFimRaw) {
                const diasNovosAlunos = countDays(dataAlunoEntrar, dataFimRaw, [1, 2, 3, 4, 5, 6]);
                diasTotais += diasNovosAlunos * alunosEntrar;
                diasPresença = diasTotais - faltas;
                console.log(diasTotais)
            }
        } else {
            diasPresença = diasTotais - faltas;
        };
        console.log(countDays(dataInicioRaw, dataFimRaw, [1, 2, 3, 4, 5, 6]));

        if(diasTotais > 0){
            const percentual = (diasPresença * 100) / diasTotais;
            const percentualFixed = percentual.valueOf().toFixed(2);
            document.getElementById("attendance").innerHTML = "A frequência da turma é de " + percentualFixed + "%";

        }
    };*/

});