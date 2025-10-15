// This component receives three pieces of information (props): name, age, and bio.
// Props are like parameters you pass to a function, but for components.

const ProfileCard = ({ name, age, bio }) => {

	// The component returns JSX, which looks like HTML but lets you use JavaScript inside curly braces {}
	return (
		
		// The outer <div> wraps all the content and uses a CSS class for styling.
		<div className="profile-card">
			{/* Display the user's name inside a heading. */}
			<h2>{name}</h2>
			{/* Show the user's age. <strong> makes the label bold. */}
			<p>
				<strong>Age:</strong> {age}
			</p>
			{/* Show the user's bio. */}
			<p>
				<strong>Bio:</strong> {bio}
			</p>
		</div>
	);
};

// This line makes the ProfileCard component available for use in other files.
export default ProfileCard;
