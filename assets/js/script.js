function login() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "admin" && password == "admin") {
        location.href = "../to-do.html"
    } else {
        alert('Usuário ou senha incorretos');
    }
}