import JSONdb from "simple-json-db";
import { v4 as uuidv4 } from "uuid";

export default class AccountManager {

    constructor(expressI) {
        this.express = expressI;
        this.db = new JSONdb("./storage/accounts.json");
        this.initializeEndpoints();
    }

    initializeEndpoints() {
        this.express.get("/register/:username/:password", (req, res) => {
            const params = req.params;
            if (this.getAccount(params.username) !== null) {
                res.status(201).send("there is already an account with this name.");
                return;
            }
            const sessionID = this.createAccount(params.username, params.password);
            res.status(200).send(sessionID);
        });
        this.express.get("/login/:username/:password", (req, res) => {
            const params = req.params;
            if (this.getAccount(params.username) === null) {
                res.status(201).send("there is no account registered with the provided username.");
                return;
            }
            const validate = this.validatePassword(params.username, params.password);
            if (validate !== "success") {
                res.status(201).send(validate);
                return;
            }
            res.status(200).send(this.createSession(params.username));
        });
        this.express.get("/verify/:token", (req, res) => {
            const params = req.params;
            const validate = this.validateSession(params.token);
            if (validate !== "good") {
                res.status(201).send(validate);
                return;
            }
            res.status(200).send("token valid");
        });
    }

    getExpress() {
        return this.express;
    }

    validatePassword(username, password) {
        const accounts = this.db.get("accounts");
        if (!accounts.hasOwnProperty(username)) {
            return "no account with username found.";
        }
        const account = accounts[username];
        if (account.password !== password) {
            return "password incorrect";
        }
        return "success";
    }

    getAccount(username) {
        const accounts = this.db.get("accounts");
        if (accounts.hasOwnProperty(username)) {
            return accounts[username];
        }
        return null;
    }

    // todo: encrypt passwords
    createAccount(username, password) {
        const accounts = this.db.get("accounts");
        if (accounts.hasOwnProperty(username)) {
            return "username already in use.";
        }
        accounts[username] = {
            password: password
        };
        this.db.set("accounts", accounts);
        this.db.sync();
        return this.createSession(username); // in no situation should this fail.
    }

    getSession(token) {
        const sessions = this.db.get("sessions");
        if (sessions.hasOwnProperty(token)) {
            return sessions[token];
        }
        return null;
    }

    validateSession(token) {
        const sessions = this.db.get("sessions");
        if (sessions.hasOwnProperty(token)) {
            const created = sessions[token].created;// Tokens expire after a month.
            if ((Date.now() - created) > (1000 * 2678400)) {
                return "token expired";
            }
            return "good";
        }
        return "no token found";
    }

    createSession(username) {
        const sessions = this.db.get("sessions");
        for (const key of Object.keys(sessions)) {
            const iUsername = sessions[key].username;
            if (iUsername === username) {
                delete sessions[key];
            }
        }
        const token = uuidv4();
        sessions[token] = {
            username: username,
            created: Date.now(),
        };
        this.db.set("sessions", sessions);
        this.db.sync();
        return token;
    }

};