let jogadorEscolha = 0 ;
let jogadorPontos = 0 ;
let computadorEscolha = 0 ;
let computadorPontos = 0 ;
let ganhador = -1 ;

function jogar(escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) +1;
    // PEDRA = 1
    // PAPEL = 2
    // TESOURA = 3 

    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2;
    } else if (jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1;
    }
}