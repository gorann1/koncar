const db = require("../db");

function dependent(app) {
  const URL = "/api/v1/dependents";

  // Get all Dependents
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.dependents");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					dependent: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

  	// Get a Dependentg
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.dependents WHERE dependent_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					dependent: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		  }
	});

  	
	// Create a Dependent
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.dependents (dependent_name, department_id) VALUES ($1, $2) RETURNING *",
				[req.body.dependent_name, req.body.department_id]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					dependent: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update Dependent
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET dependent_name, department_id = $1, code = $2, WHERE id = $4 RETURNING *",
				[req.body.dependent_name, req.body.department_id, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					dependent: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete Dependent
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.dependents WHERE dependent_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = dependent;