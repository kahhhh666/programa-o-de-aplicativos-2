// import{produto,card} from "./modulo.js"

// import { produto } from "./modulo"

// const mesa = new produto("mesa",100,0.50)

// console.log(mesa.comprar())

// const carro = new card("Mustang",99999999)
// carro.htmlElement.

// const meuObj = {
//     nome: "mouse",
//     marca: "Login"
// }
// meuObj.tamanho = 10

// console.log(meuObj.tamanho)

// import { Animal,Mamifero } from "./modulo";



//  import * as modulo from "./modulo.js"

// const novoAnimal = new modulo.Animal(true, "AnimalX")

// const cachorro = new modulo.dog(true, "Scooby " , " Pastor alemão")

// const nemo = new modulo.Peixe(true, "Nemo ", "Palhaço")

// nemo.nome = "Dory"
// console.log(novoAnimal.taVivo)
// console.log(cachorro.taVivo)
// cachorro.amamentar()

// console.log(cachorro.taVivo)


// const conta = new modulo.conta("Daniel Braga", 0,"******************")

// conta.verSaldo()
// conta.deposito(100)
// conta.verSaldo()
// conta.saque(50)
// conta.verSaldo()

const container = document.querySelector(".container")
fetch('./produto.json')
.then(response => response.json())
.then(data => { 
let produtos = data.produtos

// let usuarios = data.usuarios
// console.table(produtos)
// console.table(usuarios)    

produtos.forEach(el => {
    
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item")

    const nomeDiv = document.createElement("div");
    nomeDiv.classList.add("nome")
    nomeDiv.textContent = produto.nome

    itemDiv.appendChild(nomeDiv)

    const img = document.createElement("img");
    img.src = `img/${produto.nomeDaImagem}`
    
    itemDiv.appendChild(img)

    const valorDiv = document.createElement("div");
    valorDiv.classList.add("Valor")
    valorDiv.textContent = produto.valor

    itemDiv.appendChild(valorDiv)

    const button = document.createElement("button");
    button.textContent  ="Comprar"
    itemDiv.appendChild(button)

    container.appendChild(itemDiv)

    

});

})