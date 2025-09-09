const path = require("path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

// Define the file path for tasks.json
const filePath = path.join(__dirname, "tasks.json");        // __dirname refers to the directory where the current script (app.js) lives
                                                            // "tasks.json" is the filename where the tasks will be stored
// Load existing tasks
let tasks = fileHandler.loadTasks(filePath);                // Calls our custom function loadTasks and parses the contents of tasks.json into a JS array

// Add a new task
taskManager.addTask(tasks, "Complete Node.js lesson");
taskManager.addTask(tasks, "Review modular programming");

// List all tasks
taskManager.listTasks(tasks);

// Save updated tasks
fileHandler.saveTasks(filePath, tasks);
