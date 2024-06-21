const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoobjetivo0= new Date (2025,5,14,8,50,0)
const tempoobjetivo1= new Date (2025,7,22,8,50,0)
const tempoobjetivo2= new Date (2025,0,1,10,0,0)
const tempoobjetivo3= new Date (2024,11,25,0,0,0)
let agora=new Date();
let segundos
let minutos
let horas
let dias
segundos=(tempoobjetivo0-agora)/1000;
minutos=segundos/60
horas=minutos/60
dias=horas/24

contador[0].textContent= `Faltam ${dias},${horas} horas,${minutos} minutos e ${segundos} segundos`
contador[1].textContent=tempoobjetivo1-agora
contador[2].textContent=tempoobjetivo2-agora
contador[3].textContent=tempoobjetivo3-agora



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
