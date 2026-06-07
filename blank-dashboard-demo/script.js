function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username && password){
        localStorage.setItem("token","valid-token");
        window.location.href="dashboard.html";
    } else {
        document.getElementById("message").innerText = "Invalid credentials";
    }
}