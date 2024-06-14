const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoobjetivo1= new Date(2024,5,14,8,50,0)
const tempoobjetivo2= new Date (2024,7,22,8,50,0)
const tempoobjetivo3= new Date (2024,0,1,10,0,0)
const tempoobjetivo4= new Date (2024,1,1,1,1,1)
contador[0].textContent="olá"


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
