const { Pool } = require("pg");

require('dotenv').config();

/* const devConfig = {
  'host': process.env.DB_HOST,
  'port': process.env.DB_PORT,
  'user': process.env.DB_USER,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_DATABASE,
  'schemaName': process.env.SCHEMA_NAME,
};  */

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${
  process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_NAME}`;

const proConfig = {
  connectionString: process.env.DATABASE_URL // heroku add-on database
}

const pool = new Pool({
  connectionString:process.env.NODE_ENV === 'production' ? proConfig : devConfig
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
