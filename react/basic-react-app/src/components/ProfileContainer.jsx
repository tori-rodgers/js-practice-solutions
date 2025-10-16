// Import the ProfileCard component so we can use it below.
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {

	// The component returns JSX, which looks like HTML but lets you use JavaScript inside curly braces {}
	return (

		// The outer <div> wraps all the content and uses a CSS class for styling.
		<div className="profile-container">
			{/* This is a heading for the page. */}
			<h1>User Profiles</h1>
			{/* This <div> arranges the profile cards in a grid layout using CSS. */}
			<div className="profiles-grid">
								{/*
									Each ProfileCard displays info for one user. In React, "props" (short for "properties") are how you pass data from a parent component to a child component.
									Here, we are passing three props to each ProfileCard:
									- name: a string representing the user's name
									- age: a number representing the user's age
									- bio: a string describing the user

									When you write <ProfileCard name="John" age={30} bio="An Infrastructure Engineer" />,
									React creates a ProfileCard component and gives it an object like { name: "John", age: 30, bio: "An Infrastructure Engineer" }.
									Inside ProfileCard, you can use these values to display personalized content for each user.
								*/}
				<ProfileCard name="John" age={30} bio="An Infrustructure Engineer" />
				<ProfileCard name="Jane" age={25} bio="A Software Developer" />
				<ProfileCard name="Mike" age={35} bio="A Data Scientist" />
				<ProfileCard name="Emily" age={28} bio="A UX Designer" />
			</div>
		</div>
	);
};

// This line makes ProfileContainer available for use in other files.
export default ProfileContainer;
