function acontecimentoHorizonte(){
    let eventoAleatorioHorizonte = parseInt(Math.random() * 20 + 1);
    if (eventoAleatorioHorizonte == 1){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">voce me mamou</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 2){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">voce foi assaltado</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 3){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">uma prostituta te roubou</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 4){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">um traficante veio te cobrar</h2>
        <h2 id="horizonte-eventos">-R$1000</h2>` // digita o acontecimento
    }
    else{
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">aleatorio</h2>
        <h2 id="horizonte-eventos">-R$1000</h2>` // digita o acontecimento
        removerDinheiro(10);
    }
}