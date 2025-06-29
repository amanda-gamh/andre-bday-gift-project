

const botaoEntenda = document.getElementById('botao-entenda');
const textoEntenda = document.querySelector('.pre-jogo__instrucoes');

botaoEntenda.addEventListener('click', () => {
    textoEntenda.classList.toggle('ativo');
});

document.getElementById('botao-comecar').addEventListener('click', () => {
    const telaInicial = document.getElementById('tela-inicial');
    telaInicial.classList.add('escondido');

    setTimeout(() => {
        telaInicial.style.display = 'none';
        document.getElementById('tela-jogo').style.display = 'block';
    }, 1000); // mesmo tempo da transição CSS
});
/* Aqui ainda, na sequencia, colocar movimentos em relação a abrir a tela do jogo. Mudar display, ou melhor, acrescentar class com atributo de display block em lugar de atributo de display none, com transição suave, esmaecendo */

const botaoMusicaOn = document.querySelector('.header__music-icon');
const musicaAndrePousa = document.querySelector('#musica-fundo');
const spanOn = document.querySelector('#musica-ligada');
const spanOff = document.querySelector('#musica-desligada');


function alternarMusica() {
    if (musicaAndrePousa.paused) {
        musicaAndrePousa.play();
        spanOn.style.display = 'inline';
        spanOff.style.display = 'none';
    } else {
        musicaAndrePousa.pause();
        spanOn.style.display = 'none';
        spanOff.style.display = 'inline';
    }
}

botaoMusicaOn.addEventListener('click', alternarMusica);

//revisar esses conceitos sobre o tabuleiro e personagem depois

const tabuleiro = document.getElementById('tabuleiro');
const linhas = 7;
const colunas = 8;

// Começa no canto inferior esquerdo (linha 6, coluna 0)
let posicao = { linha: 6, coluna: 0 };
let contadorPassos = 0;

function desenharTabuleiro() {
    tabuleiro.innerHTML = '';
    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');

            // Xadrez real com linha + coluna
            if ((linha + coluna) % 2 === 0) {
                celula.style.backgroundColor = '#eee';
            } else {
                celula.style.backgroundColor = '#ccc';
            }

            // INSERIR MISSÃO
            if (linha === 6 && coluna === 1) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bed.svg';
                img.alt = 'Missão';
                img.title = 'cama';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 5 && coluna === 0) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/tooth.svg';
                img.alt = 'Missão';
                img.title = 'escovar os dentes';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 6 && coluna === 4) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/student.svg';
                img.alt = 'Missão';
                img.title = 'estudar';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 3 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/checks.svg';
                img.alt = 'Missão Final';
                img.title = 'msg master diferenciada';
                img.classList.add('missao-final');
                celula.appendChild(img);
            }

            if (linha === 4 && coluna === 5) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/radical.svg';
                img.alt = 'Missão';
                img.title = 'cálculos matemáticos';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 4 && coluna === 2) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/flask.svg';
                img.alt = 'Missão';
                img.title = 'experimentos químicos';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 3 && coluna === 6) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/paw-print.svg';
                img.alt = 'Missão';
                img.title = 'passeio com a Oli';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 2 && coluna === 1) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/flying-saucer.svg';
                img.alt = 'Missão';
                img.title = 'dormir';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 2 && coluna === 4) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/flower-lotus.svg';
                img.alt = 'Missão';
                img.title = 'meditation';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 7) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/smiley-angry.svg';
                img.alt = 'Missão';
                img.title = 'raiva';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/piano-keys.svg';
                img.alt = 'Missão';
                img.title = 'compor músicas';
                img.classList.add('missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 5) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/person-simple.svg';
                img.alt = 'Missão';
                img.title = 'Jiu-jitsu';
                img.classList.add('missao');
                celula.appendChild(img);
            }
            // Agora é somente icones sem pontuação, ok?
            if (linha === 5 && coluna === 6) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/glass.svg';
                img.alt = 'célula comum';
                img.title = 'água x8';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 6 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bathtub.svg';
                img.alt = 'célula comum';
                img.title = 'banho';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 6 && coluna === 5) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/wall.svg';
                img.alt = 'célula comum';
                img.title = 'another brick';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 5 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bread.svg';
                img.alt = 'célula comum';
                img.title = 'café da manhã né';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 3 && coluna === 1) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/dog.svg';
                img.alt = 'célula comum';
                img.title = 'brincar com a Olive';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 2 && coluna === 5) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/island.svg';
                img.alt = 'célula comum';
                img.title = 'praia';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 0) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/shower.svg';
                img.alt = 'célula comum';
                img.title = 'banho';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 3 && coluna === 4) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bowl-food.svg';
                img.alt = 'célula comum';
                img.title = 'refeição';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 5) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/toilet.svg';
                img.alt = 'célula comum';
                img.title = 'banheiro x3';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 6) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/smiley.svg';
                img.alt = 'célula comum';
                img.title = 'alegria';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 7) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/sunglasses.svg';
                img.alt = 'célula comum';
                img.title = 'pegar sol';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 1) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/potted-plant.svg';
                img.alt = 'célula comum';
                img.title = 'cuidar de plantas';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 1 && coluna === 2) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/popcorn.svg';
                img.alt = 'célula comum';
                img.title = 'cinema';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 4) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/dice-three.svg';
                img.alt = 'célula comum';
                img.title = 'jogar jogos';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/person-simple-swim.svg';
                img.alt = 'célula comum';
                img.title = 'nadar';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 2 && coluna === 3) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bicycle.svg';
                img.alt = 'célula comum';
                img.title = 'rolé de bike';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 0 && coluna === 0) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/bowl-steam.svg';
                img.alt = 'célula comum';
                img.title = 'refeição';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 6 && coluna === 7) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/car.svg';
                img.alt = 'célula comum';
                img.title = 'carro';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 2 && coluna === 7) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/shooting-star.svg';
                img.alt = 'célula comum';
                img.title = 'estrela cadente';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            if (linha === 4 && coluna === 7) {
                const img = document.createElement('img');
                img.src = './src/icons/tabuleiro-icons/book-open-text.svg';
                img.alt = 'célula comum';
                img.title = 'ler livros';
                img.classList.add('sem-missao');
                celula.appendChild(img);
            }

            // Posicionar o personagem
            if (linha === posicao.linha && coluna === posicao.coluna) {
                const img = document.createElement('img');
                img.src = './src/img/little-man-1-menor.gif';
                img.classList.add('personagem');
                img.title = ('André.v.22.')
                celula.appendChild(img);
            }

            tabuleiro.appendChild(celula);
        }
    }
    // desenharTabuleiro();
}

function moverPersonagem(direcao) {
    let mudou = false;

    if (direcao === 'cima' && posicao.linha > 0) posicao.linha--; {
        mudou = true;
    }
    if (direcao === 'baixo' && posicao.linha < linhas - 1) posicao.linha++; {
        mudou = true;
    }
    if (direcao === 'esquerda' && posicao.coluna > 0) posicao.coluna--; {
        mudou = true;
    }
    if (direcao === 'direita' && posicao.coluna < colunas - 1) posicao.coluna++; {
        mudou = true;
    }

    if (mudou) {
        contadorPassos++;
        atualizarHorario();
        desenharTabuleiro();
    }
}

document.addEventListener('keydown', (e) => {
    //só movimenta se for uma seta
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault(); //impede a rolagem padrao da tela com a telca up e down
        contadorPassos++;
        atualizarHorario();
    }

    if (e.code === 'Space') {
        e.preventDefault();
        verificarMissao();
    }

    if (e.key === 'ArrowUp' && posicao.linha > 0) posicao.linha--;
    if (e.key === 'ArrowDown' && posicao.linha < linhas - 1) posicao.linha++;
    if (e.key === 'ArrowLeft' && posicao.coluna > 0) posicao.coluna--;
    if (e.key === 'ArrowRight' && posicao.coluna < colunas - 1) posicao.coluna++;

    desenharTabuleiro();
});

const botoes = document.querySelectorAll('.botao-direcional');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const direcao = botao.dataset.direcao;

        if (direcao === 'space') {
            verificarMissao();
        } else {
            moverPersonagem(direcao);
        }
    });
});

function atualizarHorario() {
    // esconde todos os horário
    document.querySelectorAll('[class^="jogo__relogio-hora"]').forEach(h => {
        h.style.display = 'none';

    });

    // mostra o horário correspondente ao número de passos

    if (contadorPassos >= 0 && contadorPassos < 22) {
        document.querySelector('.jogo__relogio-hora01').style.display = 'block';
    } else if (contadorPassos < 40) {
        document.querySelector('.jogo__relogio-hora02').style.display = 'block';
    } else if (contadorPassos < 46) {
        document.querySelector('.jogo__relogio-hora03').style.display = 'block';
    } else if (contadorPassos < 52) {
        document.querySelector('.jogo__relogio-hora04').style.display = 'block';
    } else if (contadorPassos < 60) {
        document.querySelector('.jogo__relogio-hora05').style.display = 'block';
    } else {
        document.querySelector('.jogo__relogio-hora06').style.display = 'block';
        //aqui podemos colocar o 'encerrar o jogo'
    }
}

desenharTabuleiro();

// Obrigado, chat pelo tabuleiro com personagem dentro

// agora organizar aqui as mensagens por missao ou sem missao

const mensagensMissoes = {
    '6-1': 'arrume a cama bem arrumadinho e ganhe +2 estrelas ☺',
    '5-0': 'escovar os dentes deve demorar uns hipotéticos 20 minutos terrestres. +2 estrelas!',
    '6-4': 'estudar valerá o dia inteiro, mas com intervalos pois ninguém estuda direto, ngm é 100% focado, isso é humanamente impossível. +2 estrelas',
    '4-5': 'cálculos matemáticos; vc gosta muito, então passe várias horas terrestres neles! +2 estrelas',
    '4-2': 'agora você está a fazer uns experimentos químicos e dps relatórios! +2 estrelas',
    '3-6': 'passear com a Olive no horário certinho, sem pular a vez. U•ェ•*U. +2 estrelas',
    '2-1': 'dormir é uma missão importantíssima. se precisar ouça uns sons binaurais. +2 estrelas',
    '2-4': 'faça meditações para melhorar espiritualmente, expandindo a consciência! +2 estrelas',
    '1-7': 'raiva é uma das 4 emoções básicas. não deve ser evitada e sim compreendida. +2 estrelas',
    '1-3': 'compor músicas flui naturalmente mas leva tempo p/ ficar pronto. tudo que é bom leva tempo. +2 estrelas',
    '0-5': 'gostas de desafios, por isso você se prepara bastante. e mesmo qndo nao está esperando, enfrenta os desafios q surgem. +2 estrelas'
}

const mensagensNaoMissoes = {
    '5-6': 'hidrate-se x8',
    '6-3': 'banho',
    '6-5': 'All in all we are just a-nother...',
    '5-3': 'comer um pãozinho, um cafézinho da manhã',
    '3-1': 'brincar com a Oli! eeeeeeba (. ❛ ᴗ ❛.)',
    '2-5': 'ir para praia: importante',
    '1-0': 'banho',
    '3-4': 'comer comidas',
    '1-5': 'banheiro, x3',
    '1-6': 'alegria ☺, uma das 4 emoções básicas!',
    '0-7': 'pegar um solzinho!',
    '0-1': 'cuidar das plantas: importante',
    '1-2': 'popcorn, ice cream.. kk ver filmes é bom',
    '0-4': 'jogar jogos com os migos',
    '0-3': 'nadar, nadar... fazer nadas',
    '2-3': 'pegar uma bicicleta e sair por aí na natureza',
    '2-7': 'passou 1 estrela subindo - faça um pedido!',
    '0-0': 'refeição',
    '6-7': 'dirija para seus compromissos.',
    '4-7': 'ler livros, alimente seu conhecimento'
}


const caixaAviso = document.getElementById('caixa-avisos');
caixaAviso.textContent = 'Leia-me';

//

let pontuacaoAtual = 0;

function atualizarPontuacao() {
    const contador = document.getElementById('header__score-number');
    contador.textContent = pontuacaoAtual;
}

const temposMissoes = {
    '6-1': 10,
    '5-0': 15,
    '6-4': 25,
    '4-5': 15,
    '4-2': 10,
    '3-6': 10,
    '2-1': 15,
    '2-4': 10,
    '1-7': 10,
    '1-3': 15,
    '0-5': 10
};

function verificarMissao() {
    const chave = `${posicao.linha}-${posicao.coluna}`;
    const indice = posicao.linha * colunas + posicao.coluna;
    const celulaAtual = tabuleiro.children[indice];
    const missao = celulaAtual.querySelector('img.missao'); //se tem missao
    const semMissao = celulaAtual.querySelector('img.sem-missao');
    const mensagem = mensagensMissoes[chave] || mensagensNaoMissoes[chave];

    //se missao já foi feita, nada acontece
    if (celulaAtual.classList.contains('missao-concluida')) {
        return;
    }

    const final = celulaAtual.querySelector('img.missao-final');

    if (final) {
        if (pontuacaoAtual < 22) {
            alert('Você ainda não completou as outras tarefas. Volte aqui mais tarde!');
            return;
        }

        const senha = prompt('Missão final! Digite a frase secreta:');

        // Normaliza: remove espaços extras, deixa tudo em minúsculas
        const senhaFormatada = senha?.trim().toLowerCase().replace(/\s+/g, ' ');

        if (senhaFormatada === 'eu não mereço menos do que um desafio que me faça utilizar todas as minhas capacidades') {
            pontuacaoAtual++; // 23
            atualizarPontuacao();
            caixaAviso.innerText = 'EEEEEEEEEEEEBAAA! Fim do dia com sucesso!';
            irParaTelaFinal();
        } else {
            alert('Senha incorreta. Foi você quem falou, eu só enfeitei. Frase com 16 palavras.');
        }
        return;
    }

    if (missao) {
        // iniciar tela, msg e tempo de missao
        const tempo = temposMissoes[chave] || 3;
        iniciarMissaoComMensagem(mensagem, tempo, () => {
            missao.remove();
            celulaAtual.classList.add('missao-concluida');
            pontuacaoAtual += 2;
            atualizarPontuacao();

            const texto = document.createElement('span');
            texto.textContent = '..';
            texto.classList.add('missao-texto');
            celulaAtual.appendChild(texto);

            caixaAviso.innerText = mensagem;
        });
    } else {
        // celulas comuns, nao é missao
        if (!celulaAtual.classList.contains('vazia-visitada')) {
            celulaAtual.classList.add('vazia-visitada');
            const texto = document.createElement('span');
            texto.textContent = '..';
            texto.classList.add('missao-texto');
            celulaAtual.appendChild(texto);
        }

        caixaAviso.innerText = mensagem || 'Prossiga, nobre caminhante';
    }
}


function iniciarMissaoComMensagem(mensagem, tempo, aoFinalizar) {
    const overlay = document.getElementById('mensagem-overlay');
    const conteudo = document.getElementById('mensagem-conteudo');
    const bloqueio = document.getElementById('bloqueio-interacao');

    conteudo.textContent = mensagem;
    overlay.style.display = 'flex';
    bloqueio.style.display = 'block';

    setTimeout(() => {
        overlay.style.display = 'none';
        document.getElementById('bloqueio-interacao').style.display = 'none';
    }, tempo * 1000);
    if (aoFinalizar) aoFinalizar();
}

function irParaTelaFinal() {
    const telaJogo = document.getElementById('tela-jogo');
    const telaFinal = document.getElementById('tela-final');

    telaJogo.classList.add('fade-out');
    telaJogo.classList.add('escondido');

    setTimeout(() => {
        telaFinal.classList.remove('escondido');
        telaFinal.classList.add('fade-in');
    }, 500);
}

const reiniciar = document.getElementById('botao-reiniciar');

reiniciar.addEventListener('click', () => {
    posicao = { linha: 6, coluna: 0 };
    contadorPassos = 0;
    pontuacaoAtual = 0;

    atualizarPontuacao();
    desenharTabuleiro();
    atualizarHorario();

    // Troca as telas de volta
    document.getElementById('tela-final').classList.add('escondido');
    document.getElementById('tela-jogo').classList.remove('escondido');
});