import { useState } from "react";
import CityForecast from "./components/CityForecast";
import CityList from "./components/CityList";
import "./App.css";

function App() {
  
	const [selectedCity, setSelectedCity] = useState(null);
	const handleBack = () => setSelectedCity(null);

		return (
			<div id="root">
				{!selectedCity ? (
					<CityList onSelectCity={setSelectedCity} />
				) : (
					<CityForecast cityName={selectedCity} onBack={handleBack} />
				)}
			</div>
		);
}

export default App;
