const db = require("../db");

function manager(app) {
  const URL = "/api/v1/managers";

  // Get all managers
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.managers");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					manager: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

  	// Get a manager
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.managers WHERE manager_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					manager: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a manager
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.managers (first_name, last_name ) VALUES ($1, $2) RETURNING *",
				[req.body.first_name, req.body.last_name, req.body.gen]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					manager: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update manager
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET first_name, last_name = $1, gen = $2, WHERE id = $4 RETURNING *",
				[req.body.first_name, req.body.last_name, req.body.gen, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					manager: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete manager
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.managers WHERE manager_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = manager;