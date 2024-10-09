class Player {

    constructor(gameManager) {
        this.gameManager = gameManager;
    }

    getGameManager() {
        return this.gameManager;
    }

};

module.exports = Player;