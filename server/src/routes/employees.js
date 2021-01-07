const db = require("../db");

function employee(app) {
  const URL = "/api/v1/employees";

  // Get all Employees
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.employees");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					employee: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

  // Get a Employee
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.employees WHERE employee_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					employee: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a Employee
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.employees (first_name, last_name, position_id ) VALUES ($1, $2, $3) RETURNING *",
				[req.body.first_name, req.body.last_name, req.body.position_id]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					employee: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update Employee
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET first_name, last_name = $1, position_id = $2, WHERE employee_id = $4 RETURNING *",
				[req.body.first_name, req.body.last_name, req.position_id, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					employee: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete Employee
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.employees WHERE employee_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = employee;