import { useState } from "react";


function MovieSelector() {
		const [selectedGenre, setSelectedGenre] = useState("");
		const [isLoading, setIsLoading] = useState(false);
		const [error, setError] = useState("");
		const [movies, setMovies] = useState([]);

		// This is a pretend database of movies by genre.
		const movieDatabase = {
			Action: ["Mad Max: Fury Road", "Die Hard", "John Wick"],
			Comedy: ["Superbad", "Step Brothers", "The Hangover"],
			Drama: ["The Shawshank Redemption", "Forrest Gump", "TheGodfather"],
		};

		const fetchMovies = () => {
			if (!selectedGenre) {
				setError("Please select a genre!"); // Show error if no genre is picked
				return;
			}
			setError(""); // Clear any previous error
			setIsLoading(true); // Show loading message
			
			setTimeout(() => {   // Simulate an API call with setTimeout (waits 1.5 seconds)
				setMovies(movieDatabase[selectedGenre]); // Set movies for the selected genre
				setIsLoading(false); // Hide loading spinner/message
			}, 1500);
		};

	return (
		<div>
			<h1>Movie Selector</h1>
			<label>
				Select Genre:
				{/*
					<select> is a dropdown menu.
					- value={selectedGenre}: The dropdown shows the current selected genre from state.
					- onChange: When the user picks a genre, this event runs setSelectedGenre to update the state.
				*/}
				<select
					value={selectedGenre}
					onChange={(e) => setSelectedGenre(e.target.value)}
				>
					<option value="">--Choose a Genre--</option>
					<option value="Action">Action</option>
					<option value="Comedy">Comedy</option>
					<option value="Drama">Drama</option>
				</select>
			</label>
			<button onClick={fetchMovies}>Fetch Movies</button>

			{/*
				Show a loading message while movies are being fetched.
				- isLoading is true while waiting for movies.
			*/}
			{isLoading && <p>Loading movies...</p>}
            

			{/*
				Show an error message if something went wrong (like no genre selected).
				- error is a string from state. If it's not empty, show it in red.
			*/}
			{error && <p style={{ color: "red" }}>{error}</p>}

			{/*
				Show the list of movies if there are any.
				- movies.length > 0: Only show this part if there are movies in the array.
				- {selectedGenre}: Shows the genre in the heading.
				- movies.map: Loops through the movies array and creates a <li> for each movie.
				- key={index}: React needs a unique key for each list item (here we use the index).
				- This is how you render lists in React.
			*/}
			{movies.length > 0 && (
				<div>
					<h2>Movies in {selectedGenre} Genre:</h2>
					<ul>
						{movies.map((movie, index) => (
							<li key={index}>{movie}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default MovieSelector;
