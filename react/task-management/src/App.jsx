import { BrowserRouter as Router, Route, Routes } from "react-router";
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";
import "./App.css";

/* TODO: 1. Set up a route for the main page (/) to show TaskList. 
         2. Set up a route for /task/:id to show TaskDetail. */

function App() {

	return (

		<Router>
			<Routes>
        {/* Main page shows the task list */}
				<Route path="/" element={<TaskList />} />
        {/* Detail page for each task */}
				<Route path="/task/:taskId" element={<TaskDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
