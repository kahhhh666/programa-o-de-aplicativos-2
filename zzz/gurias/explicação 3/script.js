let name
function nome() {

    n = prompt("Digite seu nome aqui: ")


}
function bemvindo() {
alert("Seja  Ben-Vindo(a) " + n)
}

let botao = document.getElementById("btn")

botao.addEventListener("click", nome)
botao.addEventListener("click", bemvindo)
