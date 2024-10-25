class Player {

    constructor(gameManager, socket, send, token) {
        this.gameManager = gameManager;
        this.socket = socket;
        this.send = send;
        this.token = token;
        
    }

    getGameManager() {
        return this.gameManager;
    }

    getSocket() {
        return this.socket;
    }

    getSendFunction() {
        return this.send;
    }

    getToken() {
        return this.token;
    }

};

module.exports = Player;