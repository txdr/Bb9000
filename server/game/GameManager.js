class GameManager {
    
    constructor(io, accountManager) {
        this.io = io;
        this.accountManager = accountManager;
        this.initialize();
    }

    initialize() {
        this.io.on("connection", (socket) => {
            const send = (...info) => this.io.to(socket.id).emit(...info);
            
            // Player won't be fully joined until a validation is recieved.
            socket.on("validate", (token) => {
                const validate = this.accountManager.validateSesssion(token);
                if (validate !== "good") {
                    send("end", "Account validation failed");
                    return;
                }
                
            });
        });
    }

    getIO() {
        return this.io;
    }

    getAccountManager() {
        return this.accountManager;
    }

};

module.exports = GameManager;