const token = window.localStorage.getItem("token");
if (token !== null) {
    fetch(`/verify/${token}`, (response) => {
        alert(response)
    })
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Registering ${username} ${password}`)
    fetch(`register/${username}/${password}`, (response) => {
        alert(response);
    });
}

function login() {

}

