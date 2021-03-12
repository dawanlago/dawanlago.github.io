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
    {
        cor: 'Roxo',
        hexadecimal: '#993399'
    }
];

// Gerar cores aleatórias
function gerarCorAleatoria() {
    cor_escolhida = cor_escolhida = Math.floor(Math.random() * cores.length);
    document.getElementById('cor').style.backgroundColor = cores[cor_escolhida].hexadecimal;
    document.getElementById('resposta').focus();
}

// Descobrir se a cor digitado é a escolhida aleatoriamente
function descobrirCor() {
    let resposta = document.getElementById('resposta').value;

    if (resposta === '') {
        alert("Campo de resposta não pode ficar vazio");
        document.getElementById('resposta').focus();
        return;
    }

    if (resposta === cores[cor_escolhida].cor) {
        alert("Parabéns!!! Você acertou");
        document.getElementById('resposta').value = '';
        gerarCorAleatoria();
        document.getElementById('resposta').focus();
    } else {
        alert("A cor correta era " + cores[cor_escolhida].cor + ". Vamos tentar novamente")
        document.getElementById('resposta').value = '';
        gerarCorAleatoria();
        document.getElementById('resposta').focus();
    }
}


