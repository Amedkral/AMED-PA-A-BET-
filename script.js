function login() {
    let password = document.getElementById("password").value;
    let correctPassword = "12345"; // Burayı istediğin şifre ile değiştir

    if (password === correctPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html"; // Giriş sonrası yönlendirme
    } else {
        document.getElementById("message").innerText = "Yanlış şifre!";
    }
}
