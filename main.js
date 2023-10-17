//criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play();
}
//chamando/invocando a função tocaSomPom pelo clique do botão pom
document.querySelector(".tecla_pom").onclick=tocaSomPom; 

//criando contante listaDeTeclas buscando todos os itens pela classe.tecla

const listaDeTeclas = document.querySelectorAll(".tecla");
//incocando a função tocaSomPom a partir do item '0'  , 1° botão
listaDeTeclas[0].onclick = tocaSomPom;