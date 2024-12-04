let idadeBruta = document.getElementById('idade').textContent;
let idadeReal = idadeBruta.split(':')[1];
let dinheiroTotal;
let idadeMaxima = parseInt(Math.random() * 3 + 1);

//variaveis padrao

function inicioGame(){
    document.getElementById('idade').style.display='none';
    document.getElementById('dinheiro').style.display='none';
    document.getElementById('passarAninho').style.display='none';
    document.getElementById('trabalhar').style.display='none';
    document.getElementById('outros').style.display='none';
    dinheiroTotal = 0;
    idadeReal = 0;
    acontecimento = document.getElementById('horizonte-eventos');
    acontecimento.innerHTML = `<h2 id="horizonte-eventos"></h2>`
}
inicioGame();

//inicio de jogo

function adicionarDinheiro(valor){
    dinheiroTotal += valor;
    const dinheiroElemento = document.getElementById("dinheiro");
    dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    document.getElementById('dinheiroJanela').innerHTML = `<h2 id = "dinheiroJanela">Dinheiro: ${dinheiroTotal}</h2>`;
}

//function para adcionar dinheiro


function mortePersonagem(){
    inicioGame();
    document.getElementById('nomee').innerHTML = 'Nome: ';
    document.getElementById('janela').style.display='none'
    idadeReal = '0';
    document.getElementById('idade').textContent = `Idade: ${idadeReal}`;
    dinheiroTotal = 0;
    const dinheiroElemento = document.getElementById("dinheiro");
    dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    document.getElementById('dinheiroJanela').textContent = 'Dinheiro: ';
    document.getElementById('nome').style.display='inline';
    document.getElementById('botaomeupau').style.display='inline';
    document.getElementById('janela').style.display='none';
    document.getElementById('janela-trafico').style.display='none';
    acontecimentoFun('VOCE MORREU! Digite seu nome novamente e continue o jogo');
}

let textoInserido;

function acontecimentoFun(textoInserido){
    let acontecimento = document.getElementById('horizonte-eventos');
    acontecimento.innerHTML = acontecimento.innerHTML + `<h2 id="horizonte-eventos">${textoInserido}</h2>`
}

//function para morrer

function nome(){  
    let nomeInput = document.getElementById('nome').value;
    document.getElementById('nomee').innerHTML = 'Nome: ' + nomeInput;
    document.getElementById('nome').style.display='none';
    document.getElementById('botaomeupau').style.display='none';
    //
    document.getElementById('idade').style.removeProperty('display');
    document.getElementById('dinheiro').style.removeProperty('display');
    document.getElementById('passarAninho').style.removeProperty('display');
    document.getElementById('trabalhar').style.removeProperty('display');
    document.getElementById('outros').style.removeProperty('display');
    nomeInput = document.getElementById('nome').value = '';
    acontecimento.innerHTML = `<h2 id="horizonte-eventos">Você Nasceu</h2>`
}

//perguntar nome (nao repetir)

function passarAno(){
    //let idadeMaxima = parseInt(Math.random() * 3 + 1); para gerar uma idade aleatoria de morte a cada click = tire o da linha 4
    idadeReal++;
    document.getElementById('idade').textContent = `Idade: ${idadeReal}`;
    if(idadeReal == 1){
        acontecimento.innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} ano</h2>`
    } else{
        acontecimento.innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>`
    }
    if (idadeReal == '5' || idadeReal == '10' || idadeReal == '18'){
        dinheiroTotal += 150;
        const dinheiroElemento = document.getElementById("dinheiro");
        dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    }
    if(idadeMaxima == 1){
        if(idadeReal == 60){
            mortePersonagem();
        }
    } else if (idadeMaxima == 2){
        if(idadeReal == 70){
            mortePersonagem();
        }
    } else if (idadeMaxima == 3){
        if(idadeReal == 80){
            mortePersonagem();
        }
    }
    
}//passar ano

function trampar(){
    if (idadeReal < 1){
        acontecimentoFun('Voce não tem idade para trabalhar');
        return;
    }
    document.getElementById('janela').style.display='block';
}
function fecharTrabalho () {
    document.getElementById('janela').style.display='none'
}

function outros(){
    document.getElementById('janela-outros').style.display='inline';
}
function fecharOutros(){
    document.getElementById('janela-outros').style.display='none';
}



function limparChat(){
    acontecimento.innerHTML = `<h2 id="horizonte-eventos"></h2>`
}

