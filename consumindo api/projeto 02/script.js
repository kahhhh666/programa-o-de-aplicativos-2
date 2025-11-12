const livro = document.getElementById('livro')
const btn = document.querySelector("#btn")
const titulo = document.querySelector("#nmlivro")
const desc = document.querySelector("#desc")
const anl = document.querySelector("#anl")
const autor = document.querySelector("#autor")
const editora = document.querySelector("#editora")
const img = document.querySelector("#img")
const link = document.querySelector("#link")
btn.addEventListener('click', () => {

    if (!livro.value) {
        return
    }
    acessarDadosAPI()
})

async function acessarDadosAPI() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${livro.value}`
    try {

        const response = await fetch(url)
        const dados = await response.json()

        titulo.innerHTML = `${dados.items[1].volumeInfo.title}`;
        desc.innerHTML = `${dados.items[1].volumeInfo.description}`
        anl.innerHTML = `${dados.items[1].volumeInfo.publishedDate}`
        autor.innerHTML = `${dados.items[1].volumeInfo.authors[0]}`
        editora.innerHTML = `${dados.items[1].volumeInfo.publisher}`
        img.src = `${dados.items[1].volumeInfo.imageLinks.smallThumbnail}`
        link.href= `${dados.items[0].volumeInfo.infoLink}` 
    }
catch (erro) {
    alert(erro)
}

}