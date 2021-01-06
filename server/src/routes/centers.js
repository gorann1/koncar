const db = require("../db");

function center(app) {
	// API URL
	const URL = "/api/v1/centers";

	// Get all Restaurants
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.centers");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					center: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

	// Get a Center
	app.get(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"SELECT * FROM koncar.centers WHERE center_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					center: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
	
	// Create a Center
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.centers (center_name, code) VALUES ($1, $2) RETURNING *",
				[req.body.name, req.body.code]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					center: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

	// Update Center
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET center_name = $1, code = $2, WHERE id = $4 RETURNING *",
				[req.body.name, req.body.code, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					center: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

	// Delete center
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.centers WHERE id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});

}

module.exports = center;