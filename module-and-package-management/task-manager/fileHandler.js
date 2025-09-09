const fs = require("fs");

function saveTasks(filePath, tasks) {                       // filePath is a parameter defined in app.js (location of the file you want to read)
	fs.writeFileSync(filePath, JSON.stringify(tasks));      // JSON.stringify() is a method that parses a JS value into a JSON-formatted string
	console.log("Tasks saved successfully!");
}

function loadTasks(filePath) {
	if (fs.existsSync(filePath)) {
		const data = fs.readFileSync(filePath, "utf-8");    // utf-8 ensures the file is read as a string
		return JSON.parse(data);                            // JSON.parse() converts the JSON string into a JS array
	} else {
		return [];
	}
}

module.exports = { saveTasks, loadTasks };
