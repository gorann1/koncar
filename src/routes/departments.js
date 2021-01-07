const db = require("../db");

function department(app) {
  const URL = "/api/v1/departments";

  // Get all Departments
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.departments");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					department: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

  	// Get a Department
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.departments WHERE department_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					department: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a Department
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.departments (department_name, cemter_id ) VALUES ($1, $2) RETURNING *",
				[req.body.department_name, req.body.center_id]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					department: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update department
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET department_name, center_id = $1, code = $2, WHERE id = $4 RETURNING *",
				[req.body.department_name, req.body.center_id, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					department: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete department
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.departments WHERE department_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = department;