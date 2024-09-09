 
 function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //se cmpoPesquisa for vazia sem nada
     if(!campoPesquisa) {
        section.innerHTML = "<p>Atleta não encontrado</p>" 
        return
     }

     campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado e cria o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includess campoPesquisa 
        // entao , faça...
        if(titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes(campoPesquisa)) {
             // Cria um novo elemento de resultado com título, descrição e link
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descrisao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `;

        }
       
    }


    if (!resultados ) {
        resultados = "<p>Palavra não encontrado</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
}


