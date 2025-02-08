let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativa = 1;



function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100:');
    
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if(numeroSecreto > chute){
            exibirTextoNaTela('p','O número secreto é maior!');
            
        }else{
            exibirTextoNaTela('p','O número secreto é menor!');
        }
        limparCampo();
        tentativa++;
    }
    
}

function gerarNumeroAleatorio(){
    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosEscolhidos == numeroLimite)
    {
        listaDeNumerosSorteados = [];
        console.log("Lista zerou!")
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();         
    }
    else{
       listaDeNumerosSorteados.push(numeroEscolhido);
       return numeroEscolhido;

    } 
    
};



function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
