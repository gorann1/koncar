const db = require("../db");

function board(app) {
  const URL = "/api/v1/boards";

  // Get all Boards
	app.get(`${URL}`, async (req, res) => {
		try {
			const results = await db.query("SELECT * FROM koncar.boards");
			console.log("results", results);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					board: results.rows,
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
				"SELECT * FROM koncar.boards WHERE board_id = $1",
				[req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					board: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});

  	
	// Create a Board
	app.post(`${URL}`, async (req, res) => {
		try {
			const results = await db.query(
				"INSERT INTO koncar.boards (first_name, last_name ) VALUES ($1, $2) RETURNING *",
				[req.body.first_name, req.body.last_name]
			);
			res.status(201).json({
				status: "success",
				length: results.rows.length,
				data: {
					board: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
  });
  

  // Update Board
	app.put(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"UPDATE SET first_name, last_name = $1, code = $2, WHERE id = $4 RETURNING *",
				[req.body.first_name, req.body.last_name, req.params.id]
			);
			res.status(200).json({
				status: "success",
				length: results.rows.length,
				data: {
					board: results.rows[0],
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
  
 	// Delete board
	app.delete(`${URL}/:id`, async (req, res) => {
		try {
			const results = await db.query(
				"DELETE FROM koncar.boards WHERE board_id = $1 RETURNING *",
				[req.params.id]
			);
			console.log("delete", results);
		} catch (error) {
			console.log("error", error);
		}
	});



}
  module.exports = board;