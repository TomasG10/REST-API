const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: 'Sven1234'}
  },
  options: {
    database: 'esencialverdesystem',
    encrypt: true,
    trustServerCertificate: true
  }   
}

const connection = new Connection(config);

connection.connect();

connection.on('connect', (err) => {

  if (err) {
    console.error(err.message);
    throw err;
  }
  else {
    executeStatement();
  }

});

function executeStatement() {
  const request = new Request('EXEC get_products_by_sale_price_with_weight @min_price = 10.00, @max_price = 100.00, @start_date = "2023-05-13 20:16:58.200", @end_date = "2023-05-13 20:18:13.010"', (err, rowCount) => {
    if (err) {
      throw err;
    }
    connection.close();
  });

  request.on('row', (columns) => {
    console.log(columns);
  }); 

   connection.execSql(request);

}





