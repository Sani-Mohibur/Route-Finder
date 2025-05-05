function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("login-error")

    const validEmail = "mohiburrahmansani@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        errorBox.textContent = "Invalid email or password.";
    }

}