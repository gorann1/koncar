const db = require("../db");

function competency(app) {
  const URL = "/api/v1/competencies";

  // Get all Competencies
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.competencies");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					competency: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

 	// Get a Competency
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.competencies WHERE board_id = $1",
				[req.params.comp_id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					competency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a Competency
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.boards (first_name, last_name ) VALUES ($1, $2) RETURNING *",
				[req.body.comp_name ]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					competency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update Competency
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET comp_name = $1,WHERE id = $4 RETURNING *",
				[req.body.comp_name, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					competency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete Competency
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.competencies WHERE board_id = $1 RETURNING *",
				[req.params.comp_id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});

}
  module.exports = competency;