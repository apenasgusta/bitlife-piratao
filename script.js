let idadeBruta = document.getElementById('idade').textContent;
let idadeReal = idadeBruta.split(':')[1];
let dinheiroTotal;

//variaveis padrao

function inicioGame(){
    document.getElementById('idade').style.display='none';
    document.getElementById('dinheiro').style.display='none';
    document.getElementById('passarAninho').style.display='none';
    document.getElementById('trabalhar').style.display='none';
    document.getElementById('outros').style.display='none';
    dinheiroTotal = 0;
    idadeReal = 0;
}
inicioGame();

//inicio de jogo

function adicionarDinheiro(valor){
    dinheiroTotal += valor;
    const dinheiroElemento = document.getElementById("dinheiro");
    dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
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
    document.getElementById('nome').style.display='inline';
    document.getElementById('botaomeupau').style.display='inline';
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
}

//perguntar nome (nao repetir)

function passarAno(){
    idadeReal++;
    document.getElementById('idade').textContent = `Idade: ${idadeReal}`;
    if (idadeReal == '5' || idadeReal == '10' || idadeReal == '18'){
        dinheiroTotal += 150;
        const dinheiroElemento = document.getElementById("dinheiro");
        dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    }
    
}//passar ano

function trampar(){
    if (idadeReal < 14){
        alert('voce nao tem idade para trabalhar filho da puta');
        return;
    }
    document.getElementById('janela').style.display='block'
}

//abrir janela trabalho

function fecharTrabalho () {
    document.getElementById('janela').style.display='none'
}

//fechar janela trabalho

function trafico(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 5 + 1);
    console.log(eventosAleatoriosTrafico);
    if (eventosAleatoriosTrafico == 1){
        alert('voce traficou cocaina e ganhou R$1000')
        adicionarDinheiro(1000);
    } else if (eventosAleatoriosTrafico == 2){
        alert('voce traficou maconha e ganhou R$500')
        adicionarDinheiro(500);
    } else if (eventosAleatoriosTrafico == 3){
        alert('voce traficou metafetamina e ganhou R$200')
        adicionarDinheiro(200);
    } else if (eventosAleatoriosTrafico == 4){
        alert('voce taficou cimegripe e ganhou R$10')
        adicionarDinheiro(10);
        dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    } elseif (eventosAleatoriosTrafico == 5){
        alert('Voce Morreu')
        mortePersonagem();
    }
    
}

function menorAprendiz(){
    if (idadeReal < 16){

    }
}
