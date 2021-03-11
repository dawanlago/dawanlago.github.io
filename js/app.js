var cores = [
    {
        cor: 'Vermelho',
        hexadecimal: '#FF0000'
    },
    {
        cor: 'Verde',
        hexadecimal: '#008000'
    },
    {
        cor: 'Amarelo',
        hexadecimal: '#FFFF00'
    },
    {
        cor: 'Azul',
        hexadecimal: '#0000FF'
    },
    {
        cor: 'Preto',
        hexadecimal: '#000000'
    },

    {
        cor: 'Branco',
        hexadecimal: '#FFFFFF'
    },
    {
        cor: 'Rosa',
        hexadecimal: '#FFC0CB'
    },
    {
        cor: 'Laranja',
        hexadecimal: '#FFA500'
    },
];

var cor_escolhida = Math.floor(Math.random() * 8);

// Gerar cores aleatórias
function gerarCorAleatoria() {
    cor_escolhida = cor_escolhida = Math.floor(Math.random() * 8);
    document.getElementById('cor').style.backgroundColor = cores[cor_escolhida].hexadecimal;
}

function descobrirCor() {
    var resposta = document.getElementById('resposta').value;
    if (resposta === cores[cor_escolhida].cor) {
        alert("Parabéns!!! Você acertou");
        document.getElementById('resposta').value = '';
        gerarCorAleatoria();
    } else {
        alert("A cor correta era " + cores[cor_escolhida].cor + ". Vamos tentar novamente")
        document.getElementById('resposta').value = '';
        gerarCorAleatoria();
    }
}


