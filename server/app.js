const express = require('express')
const morgan = require('morgan');
const app = express();
const port = 4000;
const { Pool } = require('pg');

require('dotenv').config();

const pool = new Pool({
  'host': 'localhost',
  'port': 5432,
  'user': 'postgres',
  'password': 'postgres575',
  'database': 'creahuman',
  'schemaName': 'koncar' 
}); 


// Za MIddleware login
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/centers', async (req, res) => {
  const results = await pool.query('select * from koncar.centers');
  console.table(results.rows);
});

app.get('/', (req, res) => {
  res.send('server / dashboard page');
});

app.listen(port, function(){
  console.log(`pokrenut sever na portu ${port}`);
})