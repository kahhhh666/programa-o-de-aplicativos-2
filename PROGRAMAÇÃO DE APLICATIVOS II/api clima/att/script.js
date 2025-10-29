const local = document.getElementById('local');// O nome da localidade
const temperatura = document.querySelector("#temperatura");// A temperatura
const img = document.querySelector("img");// Imagem representando a temperatura
const umidade = document.querySelector("#umidade");// A umidade
const btn = document.querySelector("#btn");
const temp_min = document.querySelector("#tempmin")// temperatura mínima
const temp_max = document.querySelector("#tempmax")// temperatura máxima
const desc_temp = document.querySelector("#desc_temp")// Descrição do tempo
const senster = document.querySelector("#senster")// Sensação térmica
const pressao = document.querySelector("#pressao")// Pressão
const loca = document.querySelector("#loca")


btn.addEventListener('click', () => {

    if (!local.value) {
        return
    }
    acessarDadosAPI()
})

async function acessarDadosAPI() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(local.value)}&units=metric&appid=69948e6b8a0ca784dee363474368b3f2`

    try {

        await fetch(url)
            .then(Response => Response.json())
            .then(dados => {
                
                temperatura.innerHTML = `${dados.main.temp}`;
                umidade.innerHTML = `${dados.main.humidity}`;
                img.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
                temp_min.innerHTML = `${dados.main.temp_min}`
                temp_max.innerHTML = `${dados.main.temp_max}`
                desc_temp.innerHTML = `${dados.weather[0].description}`
                senster.innerHTML = `${dados.main.feels_like}`
                pressao.innerHTML = `${dados.main.pressure}`
                loca.innerHTML = `${dados.name}`
            })
    } catch (erro) {
        alert(erro)
    }
}









