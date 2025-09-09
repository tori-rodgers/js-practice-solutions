function addTask(tasks, task) {
	tasks.push(task);
	console.log(`Task "${task}" added!`);
}

function listTasks(tasks) {                     // forEach iterates over tasks array
	console.log("Current Tasks:");
	tasks.forEach((task, index) =>              // index is a built-in optional parameter
		console.log(`${index + 1}.${task}`)
	);
}

module.exports = { addTask, listTasks };
