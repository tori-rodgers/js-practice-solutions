import { useState } from "react";
import "../App.css";

function FeedbackForm() {
	// Set up state using a single formData object
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		feedback: "",
	});

	// Handle input changes for all form fields with a single function
	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(`Updating ${name}:`, value);
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Calculate remaining characters for the feedback textarea
	const maxCharacters = 200;
	const remainingCharacters = maxCharacters - formData.feedback.length;

	// Check if any field is empty to enable/disable the submit button
	const isFormComplete = formData.name && formData.email && formData.feedback;

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Form submitted successfully!");
	};

	return (
		<div className="feedback-form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter your name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="feedback">Feedback:</label>
					<textarea
						id="feedback"
						name="feedback"
						value={formData.feedback}
						onChange={handleChange}
						placeholder="Please share your feedback (max 200 characters)"
						maxLength={maxCharacters}
						rows={5}
					/>
					<div className="character-counter">
						{remainingCharacters} characters remaining
					</div>
				</div>
				<button
					type="submit"
					disabled={!isFormComplete}
					className={isFormComplete ? "btn-enabled" : "btn-disabled"}
				>
					Submit Feedback
				</button>
			</form>
			<div className="preview-container">
				<h2>Preview</h2>
				<div className="preview-content">
					<p>
						<strong>Name:</strong> {formData.name || "(Not provided)"}
					</p>
					<p>
						<strong>Email:</strong> {formData.email || "(Not provided)"}
					</p>
					<p>
						<strong>Feedback:</strong> {formData.feedback || "(Not provided)"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
