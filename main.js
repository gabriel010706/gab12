//criando/declarando a função tocaSomPom com parÂmetro idElementoAudio
function tocaSom(iElemento idElementoAudio){
    document.querySelector("idElemento idElementoAudio").play();
}
//chamando/invocando a função tocaSomPom pelo clique do botão pom
document.querySelector(".tecla_pom").onclick=tocaSomPom; 
//criando referência variável 'contador' iniciando = 0
let contador =0;

//estrutura de repetiçao 'while' significa"enquanto algo acontecer"
while(contador < listaDeTeclas){
    const efeito = listaDeTeclas[contador].classList[1]
    const idAudio ="#som_"+ efeito;
listaDeTeclas[contador].onclick = function(){
    tocaSom(idAudio);
}
contador = contador +1;
console.log(contador);
}
