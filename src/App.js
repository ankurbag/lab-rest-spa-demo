import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// constants
const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "a05e7d6beb2f7a3517a89a11bbe7d381";

function App() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async () => {
		const endpoint = `${apiUrl}discover/movie?with_genres=878&api_key=${apiKey}`;
		const response = await axios.get(endpoint);
		console.log(response?.data?.results);
		// Make api call to fetch Movies
		setMovies(response?.data?.results);
	};

	return (
		<div>
			<ul>
				{movies.map((movie) => (
					<li> {movie?.original_title}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
