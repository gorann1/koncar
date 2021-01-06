const { Pool } = require("pg");
 const pool = new Pool({
  'host': 'localhost',
  'port': 5432,
  'user': 'postgres',
  'password': 'postgres575',
  'database': 'creahuman',
  'schemaName': 'koncar' 
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};

/* const pool = new Pool({
  'host': 'localhost',
  'port': 5432,
  'user': 'postgres',
  'password': 'postgres575',
  'database': 'creahuman',
  'schemaName': 'koncar' 
}); */