const capital = document.getElementById('capital')
const btn = document.querySelector("#btn")
const pais = document.querySelector("#pais")
const regiao = document.querySelector("#regiao")
const subreg = document.querySelector("#subreg")
const idiomas = document.querySelector("#idiomas")
const fronteiras = document.querySelector("#fronteiras")
const area = document.querySelector("#area")
const img = document.querySelector("#img")
const desc = document.querySelector("#desc")
btn.addEventListener('click', () => {

    if (!capital.value) {
        return
    }
    acessarDadosAPI()
})

async function acessarDadosAPI() {
    const url = `https://restcountries.com/v3.1/capital/${capital.value}`
    try {

        const response = await fetch(url)
        const dados = await response.json()

        pais.innerHTML = `${dados.namenativename.common}`;
        // desc.innerHTML = `${dados.items[1].volumeInfo.description}`
        // anl.innerHTML = `${dados.items[1].volumeInfo.publishedDate}`
        // autor.innerHTML = `${dados.items[1].volumeInfo.authors[0]}`
        // editora.innerHTML = `${dados.items[1].volumeInfo.publisher}`
        // img.src = `${dados.items[1].volumeInfo.imageLinks.smallThumbnail}`
        // link.href= `${dados.items[0].volumeInfo.infoLink}` 
    }
catch (erro) {
    alert(erro)
}

}