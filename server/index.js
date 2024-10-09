import express from "express";
import http from "http";
import { Server } from "socket.io";
import fs from "fs";
import AccountManager from "./accounts/AccountManager.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

if (!fs.existsSync("./storage")) {
    fs.mkdirSync("./storage");
}
if (!fs.existsSync("./storage/accounts.json")) {
    fs.writeFileSync("./storage/accounts.json", JSON.stringify({
        "sessions": {},
        "accounts": {}
    }));
} 
if (!fs.existsSync("./storage/map.json")) {
    fs.writeFileSync("./storage/map.json", JSON.stringify({}));
}

app.use(express.static("client"));
new AccountManager(app);

const PORT = process.env.PORT || 19132;
server.listen(PORT);
console.log(`Server listening @ ::${PORT}`);

// All accounts wont have session id until user tries to login, or a account is recently regisatered.
// Session ids will expire after 30 days.

// Session ids will be stored in localStorage to be used next time the user returns to the site,
// therefore they can be logged in immediately.

// This will all be run through the account manager, not touching sockets until they are abosolutely needed
// when we get to the game part.