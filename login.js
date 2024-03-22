function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Nume utilizator sau parola invalida!");
    } else {
        // do something with the username and password (e.g. send to server)
        alert("Bun venit, " + username + "!");
        window.location.href = "home.html"; // redirect to home page
    }
}


