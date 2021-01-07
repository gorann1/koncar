const db = require("../db");

function detcompetency(app) {
  const URL = "/api/v1/detcompetencies";

  // Get all Detcompetencies
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.detcompetencies");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					detcompetency: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });

  	// Get a Detcompetency
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.detcompetencies WHERE detcomp_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					detcompetency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a detcompetency
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.detcompetencys (detcomp_name, comp_id ) VALUES ($1, $2) RETURNING *",
				[req.body.detcomp_name, req.body.comp_id]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					detcompetency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update detcompetency
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET detcomp_name, detcomp_id = $1, detcomp_name = $2, WHERE id = $4 RETURNING *",
				[req.body.detcomp_name, req.body.comp_id, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					detcompetency: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete detcompetency
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.detcompetencies WHERE detcomp_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = detcompetency;