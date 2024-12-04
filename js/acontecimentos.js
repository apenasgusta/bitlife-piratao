function acontecimentoHorizonte(){
    let eventoAleatorioHorizonte = parseInt(Math.random() * 10 + 1);
    if (eventoAleatorioHorizonte == 1){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">Você esbarrou em uma velha e ela te ofereceu um progama!</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 2){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">voce foi assaltado</h2>
        <h2 id="horizonte-eventos">R$-150</h2>`;
        removerDinheiro(150); // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 3){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">uma prostituta te mamou de graça</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 4){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">um traficante veio te cobrar</h2>
        <h2 id="horizonte-eventos">-R$100</h2>` // digita o acontecimento
        removerDinheiro(100);
    }
    if (eventoAleatorioHorizonte == 5){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">Sua mãe foi presa</h2>` // digita o acontecimento
        
    }
    if (eventoAleatorioHorizonte == 6){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">O rapper Arthur Carlos se assumiu homosexual</h2>` // digita o acontecimento
        
    }
    if (eventoAleatorioHorizonte == 7){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">Lucas Seibert foi visto baitando na mirage</h2>` // digita o acontecimento
    }
    if (eventoAleatorioHorizonte == 8){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">FURIA ganha e esta classificadas pros legends</h2>` // digita o acontecimento
        
    }
    if (eventoAleatorioHorizonte == 9){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">Arthur Carlos se assume hetero apos assumir que e viado</h2>` // digita o acontecimento
        
    }
    if (eventoAleatorioHorizonte == 10){
        document.getElementById('horizonte-eventos').innerHTML = `<h2 id="horizonte-eventos">Você tem ${idadeReal} anos</h2>
        <h2 id="horizonte-eventos">Você ganhou na megacena!!! </h2>` // digita o acontecimento
        adicionarDinheiro(1000000);
        
    }
}