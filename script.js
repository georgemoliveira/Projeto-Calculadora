function calcular() {
    const tipo = document.getElementById('tipoJuros').value;
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const periodo = parseInt(document.getElementById('periodo').value);
    let resultado = '';

    if (isNaN(capital) || isNaN(taxa) || isNaN(periodo) || capital < 0 || taxa < 0 || periodo < 1) {
        resultado = 'Por favor, preencha todos os campos corretamente.';
    } else {
        if (tipo === 'simples') {
            const montante = capital * (1 + taxa * periodo);
            resultado = `Montante final com juros simples: R$ ${montante.toFixed(2)}`;
        } else if (tipo === 'composto') {
            const montante = capital * Math.pow((1 + taxa), periodo);
            resultado = `Montante final com juros compostos: R$ ${montante.toFixed(2)}`;
        }
    }
    document.getElementById('resultado').innerText = resultado;
} 