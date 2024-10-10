const token = window.localStorage.getItem("token");
if (token !== null) {
    fetch(`/verify/${token}`).then((response) => {
        console.log(response)
    });
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Registering ${username} ${password}`)
    fetch(`/register/${username}/${password}`).then((response) => {
        console.log(response);
    });
}

function login() {

}

