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
return [dias,horas,minutos,segundos]
}
let contadorprimeiro = calculatempo(tempoobjetivo0)
contador[0].textContent =`Faltam ${contadorprimeiro[0]}dias, ${contadorprimeiro[1]}horas,${contadorprimeiro[2]}minutos, ${contadorprimeiro[3]}segundos.`
console.log(contadorprimeiro)
let contadorsegundo = calculatempo(tempoobjetivo1)
contador[1].textContent = `Faltam ${contadorsegundo[0]}dias, ${contadorsegundo[1]}horas,${contadorsegundo[2]}minutos, ${contadorsegundo[3]}segundos.`
let contadorterceiro = calculatempo(tempoobjetivo2)
contador[2].textContent = `Faltam ${contadorterceiro[0]}dias, ${contadorterceiro[1]}horas,${contadorterceiro[2]}minutos, ${contadorterceiro[3]}segundos.`
let contadorquarto = calculatempo(tempoobjetivo3)
contador[3].textContent = `Faltam ${contadorquarto[0]}dias, ${contadorquarto[1]}horas,${contadorquarto[2]}minutos, ${contadorquarto[3]}segundos.`


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
