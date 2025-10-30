import { Link } from "react-router";
import { tasks } from "../data/tasks";

/* TODO: 1. Use .map() to loop through each task and display it.
		 2. For each task, use a <Link> (from React Router) to create a clickable link to /task/{task.id}. */

const TaskList = () => {

	return (
		<div>
			<h1>Task List</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{/* Link to the detail page for each task */}
						<Link to={`/task/${task.id}`}>{task.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
