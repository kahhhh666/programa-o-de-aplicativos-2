document.addEventListener("DOMContentLoaded", () => {

    const container_form = document.createElement("div");
    document.body.appendChild(container_form);
    
    function createLoginForm() {
        container_form.innerHTML = "";

        const logindiv = document.createElement("div");
        logindiv.classList.add = "oi";

        const titulo = document.createElement("h2");
        titulo.textContent = "Login";
        logindiv.appendChild(titulo)

        const inputuser = document.createElement("input");
        inputuser.id = "user";
        inputuser.type = "text";
        inputuser.placeholder = "usuário";
        logindiv.appendChild(inputuser);

        const inputpassword = document.createElement("input");
        inputpassword.id = "password";
        inputpassword.type = "password"
        inputpassword.placeholder = "senha";
        logindiv.appendChild(inputpassword);

        const butaologin = document.createElement("button");
        butaologin.type = "submit";
        butaologin.id = "btn";
        butaologin.textContent = "entrar";
        butaologin.addEventListener("click", (e) => {
            e.preventDefault()
        });
        logindiv.appendChild(butaologin)

        container_form.appendChild(logindiv)

        butaologin.addEventListener("click", () => {
            const user = inputuser.value;
            const pass = inputpassword.value;

            if (user === "admin" && pass === "123") {
                alert("Login Bem-Sucedido!")
            }
            else{
                alert("Usuário ou senha incorretos")
            }
        })
    }

    createLoginForm();

});