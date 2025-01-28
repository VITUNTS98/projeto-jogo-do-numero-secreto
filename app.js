let listadeNumeros = [];
let limiteNumero = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensageminicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 a ${limiteNumero}`);
}
function verificarChute() {
    let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
    let mensagemTentativa = `voce acertou com ${tentativas} ${palavraTentativa}.`;
let chute = parseInt(document.querySelector('input').value);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
}
    if(chute < numeroSecreto){
        exibirTextoNaTela('h1','você errou!');
        exibirTextoNaTela('p',`o numero secreto é maior que ${chute} .`);
}
else if (chute > numeroSecreto){ 
        exibirTextoNaTela('h1','você errou!');
        exibirTextoNaTela('p',`o numero secreto é menor que ${chute} .`);

}tentativas++
limparCampo();
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function gerarNumeroAleatorio() {
    let quantidadedeitensdaLista = listadeNumeros.length;
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);

    if (quantidadedeitensdaLista == limiteNumero){
    listadeNumeros = [];
    }

    if (listadeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listadeNumeros.push (numeroEscolhido);
        console.log(listadeNumeros);
        return numeroEscolhido;
    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
mensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    console.log(numeroSecreto);
}
console.log(numeroSecreto);
