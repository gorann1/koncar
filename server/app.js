/* const express = require('express')
const morgan = require('morgan');
const app = express();
const port = 4000;
const { Pool } = require('pg');

require('dotenv').config();

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
}) */

require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3006;
const server = require("http").Server(app);
const morgan = require("morgan");
const cors = require("cors");

const route = require("./src/routes");
// HTTP logger
app.use(morgan("dev"));

// Apply middleware
app.use(cors());
app.use(express.json());
// Routes
route(app);

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);