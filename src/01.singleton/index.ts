let instance: DatabaseConnection | null = null;

class DatabaseConnection {
    constructor() {
        if (instance) {
            throw new Error("You already created an instance");
        }

        Object.freeze(this);
        instance = this;
    }
    connect() {
        console.log("Connected to DB");
    }
    disconnect() {
        console.log("Disconnected from DB");
    }
}

function getDatabaseConnection() {
    if (!instance) {
        new DatabaseConnection(); 
    }
    return instance!;
}

export { getDatabaseConnection };
