
const express = require('express');
const sql = require('mssql');

const app = express();

// Configuración de la conexión a la base de datos
 const config = {
  user: 'sa',
  password: 'Horizonte10',
  server: 'localhost',
  database: 'esencialverdesystem', 
  options: {
      encrypt: true,
      trustServerCertificate: true
  }
}

// Endpoint para obtener todos los países usando una conexión de pool
app.get('/producers/pool', async (req, res) => {
  try {
    const pool = await new sql.ConnectionPool(config).connect(); // Crear una nueva conexión de pool
    const result = await pool.request().query('EXEC get_products_by_sale_price_with_weight @min_price = 10.00, @max_price = 100.00, @start_date = "2023-05-13 20:16:58.200", @end_date = "2023-05-13 20:18:13.010"');
    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los contactos');
  }
});

// Endpoint para obtener todos los países sin usar una conexión de pool
app.get('/producers/nopool', async (req, res) => {
  try {
    const connection = await sql.connect(config); // Crear una nueva conexión sin pool
    const result = await connection.request().query('EXEC get_products_by_sale_price_with_weight @min_price = 10.00, @max_price = 100.00, @start_date = "2023-05-13 20:16:58.200", @end_date = "2023-05-13 20:18:13.010"');
    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los contactos');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
