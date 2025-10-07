// Handle new post form submission
// Get references to form and feedback elements
const postForm = document.getElementById("postForm");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

// Listen for form submission
postForm.addEventListener("submit", async function (event) {
	event.preventDefault(); // Prevent page reload
	formError.textContent = "";
	formSuccess.textContent = "";

	// Get values from form fields
	const title = document.getElementById("titleInput").value.trim();
	const body = document.getElementById("bodyInput").value.trim();

	// Simple validation: check if both fields are filled
	if (!title || !body) {
		formError.textContent = "Both title and body are required.";
		return;
	}

	formSuccess.textContent = "Submitting...";

	// Send POST request to API
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, body }), // Convert JS object to JSON string
		});
		// Check if response is OK (status 200-299)
		// response.json() also returns a Promise
		if (!response.ok) throw new Error("Network response was not ok");
		// Parse response JSON
		const data = await response.json();
		// Show confirmation message with returned data
		formSuccess.textContent = `Post submitted! ID: ${data.id}, Title: ${data.title}`;
		postForm.reset(); // Clear the form
	} catch (err) {
		formSuccess.textContent = "";
		formError.textContent = "Error submitting post: " + err.message;
	}
});

// Get references to button and display elements
const fetchButton = document.getElementById("fetchButton");
const postList = document.getElementById("postList");
const errorDiv = document.getElementById("error");

// Helper function to render posts in the DOM
function renderPosts(posts) {
	postList.innerHTML = ""; // Clear previous posts
	posts.forEach((post) => {
		// Create a div for each post
		const postDiv = document.createElement("div");
		postDiv.className = "post";
		// Add post title and body
		postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
		postList.appendChild(postDiv);
	});
}

// Fetch posts from API when button is clicked
async function fetchPosts() {
	postList.innerHTML = "";
	errorDiv.textContent = "";
	postList.textContent = "Loading..."; // Show loading message
	try {
		// Make GET request to API
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) throw new Error("Network response was not ok");
		// Parse response JSON
		const posts = await response.json();
		renderPosts(posts); // Display posts
	} catch (err) {
		postList.innerHTML = "";
		errorDiv.textContent = "Error loading posts: " + err.message;
	}
}

// Listen for button click to fetch posts
fetchButton.addEventListener("click", fetchPosts);
