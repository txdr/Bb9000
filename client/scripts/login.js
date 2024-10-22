const err = (text) => {
    document.getElementById("err").style.color = "red";
    document.getElementById("err").innerHTML = text;
};
const success = (text) => {
    document.getElementById("err").style.color = "green";
    document.getElementById("err").innerHTML = text;
};

const token = window.localStorage.getItem("token");
if (token !== null) {
    fetch(`/verify/${token}`).then((response) => {
        if (response.status() !== 200) {
            localStorage.removeItem("token");
            err("your token has expired, please log in again");
            return;
        }
        location.replace("play.html");
    });
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Registering ${username} ${password}`)
    fetch(`/register/${username}/${password}`).then((response) => {
        if (response.status !== 200) {
            response.text().then(err);
            return;
        }
        response.text().then((txt) => {
            success("You have been logged in.");
            localStorage.setItem("token", txt);
        })
    });
}

function login() {

}

