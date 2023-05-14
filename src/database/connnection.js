import sql from 'mssql';

export const dbSettings = {
    user: 'sa',
    password: 'Horizonte10',
    server: 'localhost',
    database: 'esencialverdesystem', 
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};

