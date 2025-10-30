import { Link } from "react-router";

/* TODO: 1. Create a list of tasks, each with an id, title, and description. 
		 2. Use .map() to loop through each task and display it. 
		 3. For each task, use a <Link> (from React Router) to create a clickable link to /task/{task.id}. */

const TaskList = () => {
	const tasks = [
		{
			id: 1,
			title: "Learn React",
			description: "Understand the basics of React.",
		},
		{
			id: 2,
			title: "Practice Hooks",
			description: "Master useState and useEffect.",
		},
		{
			id: 3,
			title: "Explore React Router",
			description: "Learn routing and URL parameters",
		},
	];

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
