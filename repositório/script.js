const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", function () {
    const categoriaSelecionada = document.querySelector("#categoria").value;
    const precoMaximoSelecionado = document.querySelector("#preco").value;

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(function (produto) {
        const categoriaProduto = produto.dataset.categoria;
        const precoProduto = produto.dataset.preco;

        let mostrarProduto = true;

        const temFiltroDeCategoria = categoriaSelecionada !== "";
        const produtoNaoBateComFiltroDeCategoria =
            categoriaSelecionada.toLowerCase() !== categoriaProduto.toLowerCase();

        if (temFiltroDeCategoria && produtoNaoBateComFiltroDeCategoria) {
            mostrarProduto = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== "";
        const produtoNaoBateComFiltroDePreco =
            parseFloat(precoProduto) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && produtoNaoBateComFiltroDePreco) {
            mostrarProduto = false;
            
        }

        if (mostrarProduto) {
            produto.classList.add("mostrar");
            produto.classList.remove("esconder");
        } else {
            produto.classList.add("esconder");
            produto.classList.remove("mostrar");
        }
    });
});
