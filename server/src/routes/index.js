const db = require("../db");

function route(app) {
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
					restaurant: results.rows,
				},
			});
		} catch (error) {
			console.log("error", error);
		}
	});
}

module.exports = route;