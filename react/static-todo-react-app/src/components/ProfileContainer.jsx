import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
	return (
		<div className="profile-container">
			<h1>User Profiles</h1>
			<div className="profiles-grid">
				<ProfileCard name="John" age={30} bio="An Infrustructure Engineer" />
				<ProfileCard name="Jane" age={25} bio="A Software Developer" />
				<ProfileCard name="Mike" age={35} bio="A Data Scientist" />
				<ProfileCard name="Emily" age={28} bio="A UX Designer" />
			</div>
		</div>
	);
};

export default ProfileContainer;
