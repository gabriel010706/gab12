//criando/declarando a função tocaSomPom com parÂmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando referẽncia constante listaDeteclasbuscando
//todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//estrutura de repetição "while" significa
//"enquanto algo acontecer" mudou while para "for"
for(let contador =0;contador <listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //acessa o 2º item da class de teclas
    const idAudio =`#som_${efeito}`;//template string
    tecla.onclick = function(){ // cria função anõnima para chamar toca som
    tocaSom(idAudio);
}
    tecla.onkeydown = function(evento){
        if(evento.code!='tab'){
        tecla.classList.add('ativa');
    }
}
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
   }
}