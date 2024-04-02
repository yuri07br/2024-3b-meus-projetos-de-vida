const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

const conrtadores = document.querySelector('.contador');
const tempoObejetivo01 = new Date("2024-05-03T00:00:00");
const tempoObejetivo02 = new Date("2024-07-07T00:00:00");
const tempoObejetivo03 = new Date("2024-09-02T00:00:00");
const tempoObejetivo04 = new Date("2024-09-01T00:00:00");

const tempo = [tempoObejetivo01,tempoObejetivo02,tempoObejetivo03,tempoObejetivo04]

for(let i= 0; i<botoes.length; i++){
    botoes[i].onclick = function (i){

        for(j=0; j<botoes.length; j++){
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')

        }

        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    } 
}

function calculatempo (tempoObejetivo) {

    let tempoAtual = new Date
    let tempoFinal = tempoObejetivo - tempoAtual

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dia = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %=24;

    return dia + " Dias " + horas + " Horas " + minutos + " Minutos " + segundos + " segundos "
}
