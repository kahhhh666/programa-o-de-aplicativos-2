const local = document.getElementById('local')
const temperatura = document.querySelector("#temperatura")
const img = document.querySelector("img")
const umidade = document.querySelector("#umidade")
const btn = document.querySelector("#btn")
const vel_vento = document.querySelector("#vel_vento")

btn.addEventListener('click',() => {

    if(!local.value){
        return
    }
    acessarDadosAPI()
})

async function acessarDadosAPI() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(local.value)}&units=metric&appid=69948e6b8a0ca784dee363474368b3f2`

    try{

        await fetch(url)
        .then(Response => Response.json())
        .then(dados => {
            temperatura.innerHTML = `${dados.main.temp}`;
            umidade.innerHTML = `${dados.main.humidity}`;
            img.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
            vel_vento.innerHTML = `${dados.wind.speed}`
        })
            }catch(erro){
                alert(erro)
            }
}