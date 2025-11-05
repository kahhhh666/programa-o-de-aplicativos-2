// Variáveis globais conforme solicitado
let conta = []; // Lista de nomes dos produtos
let valorconta = []; // Lista de preços dos produtos
let imagem; // Variável não utilizada diretamente na lógica do carrinho, mas mantida
let preco; // Variável não utilizada diretamente na lógica do carrinho, mas mantida
let soma = 0; // Soma total dos valores
let contador = 0; // Contador de itens no carrinho

// Chave de armazenamento local
const STORAGE_KEY_CONTA = 'carrinhoConta';
const STORAGE_KEY_VALOR = 'carrinhoValor';

// Elementos do DOM (serão criados no HTML)
let carrinhoContainer;
let listaCarrinho;
let totalCarrinho;
let botaoCarrinho;

// 1. Inicializar o Carrinho
function inicializarCarrinho() {
    // Tenta carregar os dados do localStorage
    const contaSalva = localStorage.getItem(STORAGE_KEY_CONTA);
    const valorSalvo = localStorage.getItem(STORAGE_KEY_VALOR);

    if (contaSalva && valorSalvo) {
        conta = JSON.parse(contaSalva);
        valorconta = JSON.parse(valorSalvo);
        // Recalcula a soma e o contador
        soma = valorconta.reduce((acc, val) => acc + val, 0);
        contador = conta.length;
    }

    // Cria os elementos do carrinho no DOM
    criarElementosCarrinho();

    // Renderiza o carrinho
    renderizarCarrinho();
}

// 2. Criar Elementos do Carrinho (Botão e Painel Lateral)
function criarElementosCarrinho() {
    // Botão do Carrinho
    botaoCarrinho = document.createElement('button');
    botaoCarrinho.id = 'botao-carrinho';
    botaoCarrinho.textContent = '🛒';
    botaoCarrinho.onclick = toggleCarrinho;
    document.body.appendChild(botaoCarrinho);

    // Container Lateral do Carrinho
    carrinhoContainer = document.createElement('div');
    carrinhoContainer.id = 'carrinho-container';
    carrinhoContainer.innerHTML = '<h3>Seu Carrinho</h3>';

    listaCarrinho = document.createElement('div');
    listaCarrinho.id = 'lista-carrinho';
    carrinhoContainer.appendChild(listaCarrinho);

    totalCarrinho = document.createElement('p');
    totalCarrinho.id = 'total-carrinho';
    carrinhoContainer.appendChild(totalCarrinho);

    document.body.appendChild(carrinhoContainer);
}

// 3. Função de Compra (Chamada pelo HTML)
function Compra(nome, precoString) {
    // O preço vem como string "R$:X.XX", precisamos converter para número
    const precoNumerico = parseFloat(precoString.replace('R$:', '').replace(',', '.'));

    // Adiciona o nome e o valor às listas globais
    conta.push(nome);
    valorconta.push(precoNumerico);

    // Atualiza a soma e o contador
    soma += precoNumerico;
    contador = conta.length;

    salvarCarrinho();
    renderizarCarrinho();

    // Abre o carrinho ao adicionar um item
    if (!carrinhoContainer.classList.contains('aberto')) {
        toggleCarrinho();
    }
}

// 4. Salvar Carrinho no LocalStorage
function salvarCarrinho() {
    localStorage.setItem(STORAGE_KEY_CONTA, JSON.stringify(conta));
    localStorage.setItem(STORAGE_KEY_VALOR, JSON.stringify(valorconta));
}

// 5. Renderizar o Carrinho no Painel Lateral
function renderizarCarrinho() {
    listaCarrinho.innerHTML = ''; // Limpa a lista atual

    if (conta.length === 0) {
        listaCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        // Para renderizar corretamente, precisamos agrupar os itens
        const itensAgrupados = conta.reduce((acc, nome, index) => {
            const preco = valorconta[index];
            const chave = `${nome}|${preco}`; // Chave única para agrupar

            if (!acc[chave]) {
                acc[chave] = { nome, preco, quantidade: 0 };
            }
            acc[chave].quantidade += 1;
            return acc;
        }, {});

        Object.values(itensAgrupados).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');

            const subtotal = item.preco * item.quantidade;

            itemDiv.innerHTML = `
                <span>${item.nome} (${item.quantidade}x)</span>
                <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                <button onclick="removerItemPorNomeEPreco('${item.nome}', ${item.preco})">X</button>
            `;
            listaCarrinho.appendChild(itemDiv);
        });
    }

    totalCarrinho.textContent = `Total: R$ ${soma.toFixed(2).replace('.', ',')}`;
    botaoCarrinho.textContent = `🛒`;
}

// 6. Remover Item do Carrinho (Remove a primeira ocorrência)
function removerItemPorNomeEPreco(nome, preco) {
    // Encontra o índice da primeira ocorrência do item
    const indexParaRemover = conta.findIndex((n, i) => n === nome && valorconta[i] === preco);

    if (indexParaRemover !== -1) {
        // Remove o item e o valor das listas
        conta.splice(indexParaRemover, 1);
        const valorRemovido = valorconta.splice(indexParaRemover, 1)[0];

        // Atualiza a soma e o contador
        soma -= valorRemovido;
        contador = conta.length;

        salvarCarrinho();
        renderizarCarrinho();
    }
}

// 7. Alternar a Visibilidade do Carrinho
function toggleCarrinho() {
    carrinhoContainer.classList.toggle('aberto');
}

// Inicia o script quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', inicializarCarrinho);
