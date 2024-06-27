const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoobjetivo0= new Date (2025,5,14,8,50,0)
const tempoobjetivo1= new Date (2025,7,22,8,50,0)
const tempoobjetivo2= new Date (2025,0,1,10,0,0)
const tempoobjetivo3= new Date (2024,11,25,0,0,0)
function calculatempo (tempoobjetivo){
    let agora=new Date();
let segundos
let minutos
let horas
let dias

segundos=(tempoobjetivo - agora)/1000;
minutos=segundos/60
horas=minutos/60
dias=horas/24
segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);
segundos = segundos%60;
minutos = minutos%60;
horas = horas%24;
}

for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
