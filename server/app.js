require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3006;
const server = require("http").Server(app);
const morgan = require("morgan");
const cors = require("cors");

const center = require("./src/routes/centers");
const board = require("./src/routes/boards");
const competency = require("./src/routes/competencies");

// HTTP logger
app.use(morgan("dev"));

// Apply middleware
app.use(cors());
app.use(express.json())

// Routes
center(app);
board(app);
competency(app);

app.get('/', (req, res) => {
  res.send('server / dashboard page');
})

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);