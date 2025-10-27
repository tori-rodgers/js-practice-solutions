import { useEffect, useState, useRef } from "react";

const weatherData = {

	NewYork: {
		summary: "Sunny, 25°C",
		details: "Clear skies throughout the day with mild temperatures.",
	},
	London: {
		summary: "Cloudy, 18°C",
		details: "Overcast with occasional light rain in the afternoon.",
	},
	Tokyo: {
		summary: "Rainy, 22°C",
		details: "Continuous rain expected throughout the day.",
	},
};

const CityForecast = ({ cityName, onBack }) => {
	const [forecast, setForecast] = useState(null);
	const detailsRef = useRef(null);

	useEffect(() => {
		// Simulate fetching data
		setForecast(weatherData[cityName] || { summary: "No data available" });
	}, [cityName]);

	const scrollToDetails = () => {
		detailsRef.current.scrollIntoView({ behavior: "smooth" });
	};

	if (!cityName) return <p>Please select a city to view the forecast.</p>;
	if (!forecast) return <p>Loading...</p>;

	return (
		<div className="card">
			<h1>Weather Forecast for {cityName}</h1>
			<p>{forecast.summary}</p>
			{forecast.details && (
				<>
					<button className="details-btn" onClick={scrollToDetails}>View Details</button>
					<div ref={detailsRef} className="details">
						<p>{forecast.details}</p>
					</div>
				</>
			)}
			<button onClick={onBack}>Back to City List</button>
		</div>
	);
};

export default CityForecast;
