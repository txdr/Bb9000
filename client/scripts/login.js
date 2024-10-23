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
            err("Your access token has expired, please log in again");
            return;
        }
        location.replace("play.html");
    });
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch(`/register/${username}/${password}`).then((response) => {
        if (response.status !== 200) {
            response.text().then(err);
            return;
        }
        response.text().then((txt) => {
            success("You have been registered & logged in.");
            localStorage.setItem("token", txt);
        })
    });
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch(`/login/${username}/${password}`).then((response) => {
        if (response.status !== 200) {
            response.text().then(err);
            return;
        }
        response.text().then((txt) => {
            success("You have been logged in... please wait.");
            localStorage.setItem("token", txt);
            setTimeout(() => {
                location.replace("play.html");
            }, 1000);
        });
    });
}

