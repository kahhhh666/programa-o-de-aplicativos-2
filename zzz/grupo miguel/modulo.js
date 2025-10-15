//  export let objeto =  {
//     nome: "Controle",
//     cor:"Branco",
//     marca:"Epson",
//     ligar: function(){
//         console.log("o projeto foi ligado")
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------

// export let produto = {
//     nome:"play5",
//     preco:3626,
//     desconto: 0.02
// }

export class produto {
    constructor(nome, preco, desconto) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
        this.comprar = function () {
            console.log(`${this.nome} Foi comprado`)
        }
    }
}

export class card {
    constructor(nome, preco) {
        this.htmlElement = document.createElement("div")
    }
}

export class Animal {
    constructor(taVivo,nome) {
        this.taVivo = taVivo
        this.nome = nome 
        this.planeta = "Terra"
    }
}

export class Mamifero extends Animal {

    constructor(taVivo,nome) {
        super(taVivo,nome)
    }

    amamentar(){
            console.log(this.nome+"está amamentando")
        }
        correr(){
            console.log(this.nome+" esta correndo")
        }
} 

export class dog extends Mamifero{
    constructor(taVivo,nome,raca){
        super(taVivo,nome)

        this.raca = raca
    }
}

export class Peixe extends Animal{
    constructor(taVivo,nome,tipo){
        super(taVivo,nome)

        this.tipo = tipo
    }
    nadar(){
        console.log(this.nome+" esta nadando")
    }
}

export class conta{
    #saldo
    #senha

    constructor(nome, saldoIn,valorSenha){
        this.nome = nome

        this.#saldo = saldoIn
        this.#senha = valorSenha

    }

    verSaldo(){
        console.log(this.#saldo) ;
    }
    deposito(valor){
         this.#saldo += valor
    }

    saque(valor){
        if(this.#saldo>=valor){
             this.#saldo -= valor
        }
        else{
             this.#saldo
        }
    }
}