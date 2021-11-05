var listaProdutos = [[0, 'VODKA STOLICHNAYA', 'caneta.webp', false], [1, 'TEQUILA JOSÉ CUERVO', 'feijoes.jpeg', false], [2,'GIN TANQUERAY', 'tanqueray.jpeg', false]];

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("lista-produtos").innerHTML = "";


    for(var i = 0; i < listaProdutos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card" >';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false)
        {
            conteudo += '<div class="div-card-comprar"  onclick="comprar(' + listaProdutos[i][0] + ')"  >';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprar div-card-comprado"   >';
            conteudo += 'Comprado';
            conteudo += '</div>';
        }
        


        conteudo += '</div>';
        
        document.getElementById("lista-produtos").innerHTML += conteudo;
    }
}

function comprar(id){

    listaProdutos[id][3] = true;
    
    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();

}