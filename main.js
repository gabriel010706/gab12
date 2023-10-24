//criando/declarando a função tocaSomPom com parÂmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando referência variável 'contador' iniciando = 0
let contador =0;

//estrutura de repetiçao 'while' significa"enquanto algo acontecer"
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1]
    const idAudio ="#som_"+ efeito;
listaDeTeclas[contador].onclick = function(){
    tocaSom(idAudio);
}
contador = contador +1;
console.log(contador);
}
