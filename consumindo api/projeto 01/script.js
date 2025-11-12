const livro = document.getElementById('livro')
const btn = document.querySelector("#btn")
const resultado = document.querySelector("#livros")
btn.addEventListener('click', () => {

    if (!livro.value) {
        return
    }
    acessarDadosAPI()
})

async function acessarDadosAPI() {
    let url = `https://jsonplaceholder.typicode.com/todos/${livro.value}`
    try {

        await fetch(url)
      .then(response => response.json())
      .then(dados =>{
            resultado.innerHTML = `${dados.title}`;

    })
}catch (erro) {
        alert(erro)
    }

}