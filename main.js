const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function () {
        for(let j=0;j<botoes.length;j++){
            botoes[j].clasList.remove("ativo");
        }
        botoes[i].clasList.add("ativo");
    }
}
