const { Connection } = require('tedious');

const dbSettings = {
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'Sven1234'
        }
    },
    server: 'localhost',
    options: {
        database: 'esencialverdesystem',
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnectionNoPool() {
    try {
        const connection = new Connection(dbSettings);
        await connection.connect();
        console.log('Conexión exitosa');
        return connection;
    } catch (error) {
        console.log(error);
    }
}
