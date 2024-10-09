class GameManager {
    
    constructor(io, accountManager) {
        this.io = io;
        this.accountManager = accountManager;
    }

    getIO() {
        return this.io;
    }

    getAccountManager() {
        return this.accountManager;
    }

};

module.exports = GameManager;