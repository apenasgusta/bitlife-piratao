function trafico(){
    document.getElementById('janela-trafico').style.display='block';
    let alterarTextoTrafico;
    document.getElementById('janela').style.display='none';
    alterarTextoTrafico = document.getElementById('janela-trafico').innerHTML = `
            <h2>Trafico</h2>
            <button onclick="traficarCocaina()">Traficar Cocaina R$1000</button>
            <button onclick="traficarMaconha()">Traficar Maconha R$700</button>
            <button onclick="traficarMetafetamina()">Traficar Metafetamina R$ 400</button>
            <button onclick="traficarCimeGripe()">Traficar CimeGripe R$ 100</button>
            <button onclick="fecharJanelaTrafico()">Fechar</button> `
}
function fecharJanelaTrafico(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-trafico').style.display='none';
}
function traficarCocaina(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 3 + 1);
    adicionarDinheiro(1000);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3 || eventosAleatoriosTrafico == 5 || eventosAleatoriosTrafico == 7 ){
        mortePersonagem();
        acontecimentoFun('Morreu porque tomou 2 tiros de escopeta do Calabreso');
    }
}
function traficarMaconha(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3 || eventosAleatoriosTrafico == 5){
        mortePersonagem();
        acontecimentoFun('Morreu porque rebolou errado pros crias');
    }
}  
function traficarMetafetamina(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    if (eventosAleatoriosTrafico == 1 || eventosAleatoriosTrafico == 3){
        mortePersonagem();
        acontecimentoFun('Morreu porque Trevor Philips interviu nos negocios')
    }
    
}
function traficarCimeGripe(){
    let eventosAleatoriosTrafico = parseInt(Math.random() * 10 + 1);
    if (eventosAleatoriosTrafico == 1){
        mortePersonagem();
        acontecimentoFun('Morreu pq foi lerdão');
    }
    
}
