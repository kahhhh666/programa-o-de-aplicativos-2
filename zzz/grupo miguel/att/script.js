fetch('./alala.json')
.then(response => response.json())
.then(data => {
    let infos = data.info

    console.table(infos)
})