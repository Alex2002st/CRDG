function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let button = document.getElementById('button').value;

    if (username == "alex2002@gmail.com" && password == "1234") {

        alert("Bienvenido")
        window.location = "index.html";
    }
    else {
        alert("Usuario o contraseña incorrecto")
    }
}


button.addEventListener('click', (e) => {
    e.preventDefault() //desabilitamos funcion del botn 
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);

    const data = {
        username: username.value, 
        password: password.value
    }
    console.log(data);
})
