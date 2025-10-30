import { useParams } from "react-router";

/* TODO: 1. Use the useParams hook from React Router to get the id from the URL. 
         2. Find the task in your data that matches the id. 
         3. Display the task’s details (title and description). 
         4. If the id is missing or invalid, show an error message. */

const TaskDetail = () => {
    
    const { taskId } = useParams(); // Get the task ID from the URL
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
			description: "Learn routing and URL parameters.",
		},
	];
    
    const task = tasks.find((task) => task.id === parseInt(taskId));
	if (!task) { // Handle invalid or missing task IDs
		return <p>Task not found.</p>;
	}
	return (
        <div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
		</div>
	);
};

export default TaskDetail;
