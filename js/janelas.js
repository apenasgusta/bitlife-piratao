// JANELAS TRAFICO -----------------------------------------------
// JANELAS TRAFICO -----------------------------------------------
// JANELAS TRAFICO -----------------------------------------------

function trafico(){
    document.getElementById('janela-trafico').style.display='block';
    //let alterarTextoTrafico;
    document.getElementById('janela').style.display='none';
    document.getElementById('janela-trafico').innerHTML = `
            <h2>Trafico</h2>
            <button onclick="traficarCocaina()">Traficar Cocaina R$5000</button>
            <button onclick="traficarMaconha()">Traficar Maconha R$3500</button>
            <button onclick="traficarMetafetamina()">Traficar Metafetamina R$1000</button>
            <button onclick="traficarCimeGripe()">Traficar CimeGripe R$500</button>
            <button onclick="fecharJanelaTrafico()">Fechar</button> `
}
function fecharJanelaTrafico(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-trafico').style.display='none';
}
function traficarCocaina(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 3 + 1);
    adicionarDinheiro(5000);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3 || eventosAleatoriosTrafico == 5 || eventosAleatoriosTrafico == 7 ){
        mortePersonagem();
        acontecimentoFun('Morreu porque tomou 2 tiros de escopeta do Calabreso');
    }
}
function traficarMaconha(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    adicionarDinheiro(3500);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3 || eventosAleatoriosTrafico == 5){
        mortePersonagem();
        acontecimentoFun('Morreu porque rebolou errado pros crias');
    }
}  
function traficarMetafetamina(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    adicionarDinheiro(1000);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3){
        mortePersonagem();
        acontecimentoFun('Morreu porque Trevor Philips interviu nos negocios')
    }
    
}
function traficarCimeGripe(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    adicionarDinheiro(500);
    if (eventosAleatoriosTrafico == 1){
        mortePersonagem();
        acontecimentoFun('Morreu pq foi lerdão');
    }
    
}

//JANELAS MENOR APRENDIZ----------------------------------------------------
//JANELAS MENOR APRENDIZ----------------------------------------------------
//JANELAS MENOR APRENDIZ----------------------------------------------------


function menorAprendiz(){
    document.getElementById('janela-menorAprendiz').style.display='block';
    document.getElementById('janela').style.display='none';
    document.getElementById('janela-menorAprendiz').innerHTML = `
            <h2>Menor Aprendiz</h2>
            <button onclick="trabalharUmaHora()">Trabalhar 1H</button>
            <button onclick="trabalharDuasHoras()">Trabalhar 2h</button>
            <button onclick="trabalharChina()">Traficar igual na China (18h)</button>
            <button onclick="fecharJanelaMenor()">Fechar</button>`
}
function fecharJanelaMenor(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-menorAprendiz').style.display='none';
}
function trabalharUmaHora(){
    adicionarDinheiro(100);
    acontecimentoFun('Voce deu para o chefe e ganhou R$100');
}
function trabalharDuasHoras(){
    adicionarDinheiro(300);
    acontecimentoFun('Voce mamou o chefe e a esposa e ganhou R$300');
}
function trabalharChina(){
    adicionarDinheiro(10);
    acontecimentoFun('Voce foi escravizado e ganhou R$10');
}

//JANELA GARI ---------------------------------------------------
//JANELA GARI ---------------------------------------------------
//JANELA GARI ---------------------------------------------------

function gari(){
    document.getElementById('janela-gari').style.display='block';
    document.getElementById('janela').style.display='none';
    document.getElementById('janela-gari').innerHTML = `
            <h2>Lixão</h2>
            <button onclick="trabalharLixo()">Trabalhar</button>
            <button onclick="roubarChefeGari()">Tentar roubar o chefe</button>
            <button onclick="fecharJanelaGari()">Fechar</button>`
}
function fecharJanelaGari(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-gari').style.display='none';
}
function trabalharLixo(){
    acontecimentoFun('Voce trabalhou e ganhou 10R$')
    adicionarDinheiro(10);
}
function roubarChefeGari(){
    let rouboChefeGariNum = parseInt(Math.random() * 10 + 1);
    console.log(rouboChefeGariNum);
    if (rouboChefeGariNum == 1){
        mortePersonagem();
    } else {
        acontecimentoFun('voce roubou a porshe e vendeu no mercadinho ao lado');
        adicionarDinheiro(100000);
    }
}

//JANELA ONLYFANS -----------------------------------------------------------
//JANELA ONLYFANS -----------------------------------------------------------
//JANELA ONLYFANS -----------------------------------------------------------

function onlyFans(){
    document.getElementById('janela-garotoOnly').style.display='block';
    document.getElementById('janela').style.display='none';
    document.getElementById('janela-garotoOnly').innerHTML = `
            <h2>Only Fans</h2>
            <button onclick="fazerPubli()">Publicidade</button>
            <button onclick="postarNudes()">Publicar Conteudo</button>
            <button onclick="fecharJanelaOnly()">Fechar</button>`;
}
function fecharJanelaOnly(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-garotoOnly').style.display='none';
}
let nivelFamosoOnly = 0;
function fazerPubli(){
    nivelFamosoOnly += 1;
    if (nivelFamosoOnly > 10){
         return nivelFamosoOnly--;
    }
    return nivelFamosoOnly;
    console.log(nivelFamosoOnlyReal);
}
function postarNudes(){ //bug n ta funcionando
    if(nivelFamosoOnly >= 3){
        acontecimentoFun('Voce ganhou R$100');
        adicionarDinheiro(100);
    } else if(nivelFamosoOnly > 3 && nivelFamosoOnly < 6){
        acontecimentoFun('Voce ganhou R$300');
        adicionarDinheiro(300);
    } else if (nivelFamosoOnly >= 6){
        acontecimentoFun('Voce ganhou R$1000');
        adicionarDinheiro(1000);
    } else {
        acontecimentoFun('Voce Ganhou R$10')
        adicionarDinheiro(10);
    }
}