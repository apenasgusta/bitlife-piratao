//arthur é gay
//gustavo é gay

let idadeBruta = document.getElementById('idade').textContent;
let idadeReal = idadeBruta.split(':')[1];
let dinheiroTotal = 0;
let eventosAleatoriosTrampo = parseInt(Math.random() * 10 + 1);

/*document.getElementById('idade').style.display='none';
document.getElementById('dinheiro').style.display='none';
document.getElementById('passarAninho').style.display='none';
document.getElementById('trabalhar').style.display='none';
document.getElementById('outros').style.display='none';*/

//nome
function nome(){
    let nomeInput = document.getElementById('nome').value;
    document.getElementById('nomee').innerHTML = 'Nome: ' + nomeInput;
    document.getElementById('nome').style.display='none';
    document.getElementById('botaomeupau').style.display='none';
    //
    /*document.getElementById('idade').style.removeProperty('display');
    document.getElementById('dinheiro').style.removeProperty('display');
    document.getElementById('passarAninho').style.removeProperty('display');
    document.getElementById('trabalhar').style.removeProperty('display');
    document.getElementById('outros').style.removeProperty('display');*/
}

//passar ano
function passarAno(){
    idadeReal++;
    document.getElementById('idade').textContent = `Idade: ${idadeReal}`;
    if (idadeReal == '5' || idadeReal == '10' || idadeReal == '18'){
        dinheiroTotal += 150;
        const dinheiroElemento = document.getElementById("dinheiro");
        dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    }
    
}

function trampar(){
    document.getElementById('janela').style.display='block'
}

function trafico(){
    if (eventosAleatoriosTrampo == 1){
        dinheiroTotal += 1000
        const dinheiroElemento = document.getElementById("dinheiro");
        dinheiroElemento.textContent = `Dinheiro: R$ ${dinheiroTotal}`;
    }
}

