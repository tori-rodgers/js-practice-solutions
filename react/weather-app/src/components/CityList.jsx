
const CityList = ({ onSelectCity }) => {

	const cities = ["NewYork", "London", "Tokyo"];
    
	return (
		<div className="card">
			<h1>City Weather Forecast</h1>
			<ul>
				{cities.map((city) => (
					<li
						key={city}
						className="city-list-item"
						onClick={() => onSelectCity(city)}
						style={{
							cursor: "pointer",
						}}
					>
						{city}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CityList;
