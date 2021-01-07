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
const department = require("./src/routes/departments");
const dependent = require("./src/routes/dependents");
const detcompetency = require("./src/routes/detcompetencies");
const employee = require("./src/routes/employees");
const manager = require("./src/routes/managers");
const position = require("./src/routes/positions");

// HTTP logger
app.use(morgan("dev"));

// Apply middleware
app.use(cors());
app.use(express.json());
//app.use(express.static('./client/build'));
app.use(express.static(path.join(__dirname,'client/build')));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')));
}

console.log(__dirname);
console.log(path.join(__dirname,'client/build'));

// Routes
center(app);
board(app);
competency(app);
department(app);
dependent(app);
detcompetency(app);
employee(app);
manager(app);
position(app);

app.get('/', (req, res) => {
  res.send('server / dashboard page');
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'client/build/index.html'))
})

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);