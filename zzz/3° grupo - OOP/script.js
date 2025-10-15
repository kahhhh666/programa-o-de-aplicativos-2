let total = 0;
let itensCarrinho = [];
let contador = 0;

const container = document.querySelector(".container");

//painel do carrinho
const painel_carrinho = document.createElement("div");
painel_carrinho.classList.add("painel_do_carrinho");
document.body.appendChild(painel_carrinho);

//titulo do carrinho
const tituloCarrinho = document.createElement("h2");
tituloCarrinho.textContent = "Seu Carrinho";
painel_carrinho.appendChild(tituloCarrinho);

//Local onde vai conter os itens
const listaCarrinho = document.createElement("div");
listaCarrinho.classList.add("lista_carrinho");
painel_carrinho.appendChild(listaCarrinho);

//Local onde vai calcular o preço total
const totalDiv = document.createElement("div");
totalDiv.classList.add("total");
painel_carrinho.appendChild(totalDiv);

//Finalizar a compra 
const btnFinalizar = document.createElement("button");
btnFinalizar.classList.add("btn-finalizar");
btnFinalizar.textContent = "Finalizar Compra";
painel_carrinho.appendChild(btnFinalizar);

//Fechar o painel do carrinho
const btnFechar = document.createElement("button");
btnFechar.classList.add("btn-fechar");
btnFechar.textContent = "×";
painel_carrinho.appendChild(btnFechar);

btnFechar.addEventListener("click", () => {
    painel_carrinho.classList.remove("ativo");
});

btnFinalizar.addEventListener("click", () => {
    if (itensCarrinho.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");
    listaCarrinho.innerHTML = "";
    total = 0;
    totalDiv.textContent = "Total: R$ 0.00";
    itensCarrinho = [];
});

const menu_carrinho = document.createElement("button")
menu_carrinho.src = `img/cardapio.png`
document.body.appendChild(menu_carrinho)

//pegar os dados e criar o resto da página
fetch('./produto.json')
    .then(response => response.json())
    .then(data => {
        let produtos = data.produtos;

        produtos.forEach(el => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const nomeDiv = document.createElement("div");
            nomeDiv.classList.add("nome");
            nomeDiv.textContent = el.nome;
            itemDiv.appendChild(nomeDiv);

            const img = document.createElement("img");
            img.src = `img/${el.nomeDaImagem}`;
            itemDiv.appendChild(img);

            const valorDiv = document.createElement("div");
            valorDiv.classList.add("valor"); 
            valorDiv.textContent = `R$: ${el.valor}`;
            itemDiv.appendChild(valorDiv);

            const button = document.createElement("button");
            button.textContent = "Comprar";
            itemDiv.appendChild(button);

            container.appendChild(itemDiv);

            // Evento do botão "Comprar"
            button.addEventListener("click", () => {
                if (itensCarrinho.includes(el.nome)) {
                    alert(`${el.nome} já está no carrinho!`);
                    return;
                }

                const item_carrinho = document.createElement("div");
                item_carrinho.classList.add("item_carrinho");

                const nomeDiv = document.createElement("div");
                nomeDiv.classList.add("nome");
                nomeDiv.textContent = el.nome;
                item_carrinho.appendChild(nomeDiv);

                const img = document.createElement("img");
                img.src = `img/${el.nomeDaImagem}`;
                item_carrinho.appendChild(img);

                const infoDiv = document.createElement("div");
                infoDiv.classList.add("info");
                infoDiv.innerHTML = `
                    <p>${el.nome}</p>
                    <p class="preço">R$ ${el.valor}</p>
                `;
                item_carrinho.appendChild(infoDiv);

                let input_quantidade = document.createElement("input");
                input_quantidade.classList.add("quantidade");
                input_quantidade.type = "number";
                input_quantidade.value = "1";
                input_quantidade.disabled = true;
                infoDiv.appendChild(input_quantidade);

                let aumentar = document.createElement("button");
                aumentar.textContent = "+";
                infoDiv.appendChild(aumentar);

                let diminuir = document.createElement("button");
                diminuir.textContent = "-";
                infoDiv.appendChild(diminuir);

                const remover = document.createElement("button");
                remover.textContent = "x";
                infoDiv.appendChild(remover);

                
                remover.addEventListener("click", () => {
                    listaCarrinho.removeChild(item_carrinho);
                    itensCarrinho = itensCarrinho.filter(nome => nome !== el.nome);
                    total -= parseFloat(el.valor) * parseInt(input_quantidade.value);
                    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
                });

                aumentar.addEventListener("click", () => {
                    let qtd = parseInt(input_quantidade.value);
                    qtd++;
                    input_quantidade.value = qtd;
                    total += parseFloat(el.valor);
                    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
                });

                diminuir.addEventListener("click", () => {
                    let qtd = parseInt(input_quantidade.value);
                    if (qtd > 1) {
                        qtd--;
                        input_quantidade.value = qtd;
                        total -= parseFloat(el.valor);
                        totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
                    } else {
                        listaCarrinho.removeChild(item_carrinho);
                        itensCarrinho = itensCarrinho.filter((nome) => nome !== el.nome);
                        total -= parseFloat(el.valor);
                        totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
                    }
                });

                painel_carrinho.classList.add("ativo");

                total += parseFloat(el.valor);
                totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;

                itensCarrinho.push(el.nome);
                listaCarrinho.appendChild(item_carrinho); 
            });
        });
    });
