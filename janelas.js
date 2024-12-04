function trafico(){
    document.getElementById('janela-trafico').style.display='block';
    let alterarTextoTrafico;
    document.getElementById('janela').style.display='none';
    alterarTextoTrafico = document.getElementById('janela-trafico').innerHTML = `
            <h2 id ="dinheiroJanela">Trafico</h2>
            <button onclick="traficarCocaina()">Menor Aprendiz</button>
            <button onclick="traficarMaconha()">Botão 3</button>
            <button onclick="traficarMetafetamina()">Botão 4</button>
            <button onclick="traficarCimeGripe">Botão 5</button>
            <button onclick="fecharJanelaTrafico()">Fechar</button> `
}
function fecharJanelaTrafico(){
    document.getElementById('janela').style.display='block';
    document.getElementById('janela-trafico').style.display='none';
}