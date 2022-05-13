import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";

import numeral from "numeral";

// Redux
import { useSelector } from "react-redux";

// Images
import loadingGif from "../../images/loading.gif";

// Css
import "leaflet/dist/leaflet.css";
import "./Map.scss";

const Map = ({ center, zoom }) => {
	const map = useSelector((state) => state.map);
	const countries = useSelector((state) => state.countries);

	// Show/Hide Map State
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(false);
		setTimeout(() => setShow(true), 1000);
	}, [map]);

	// Different types of data - Cases / Recovered / Deaths
	const mapSettings = {
		cases: {
			color: "#f59e0b",
			fillColor: "#f59e0b",
			multipier: 0.25,
		},
		recovered: {
			color: "#10b981",
			fillColor: "#10b981",
			multipier: 0.3,
		},
		deaths: {
			color: "#dc2626",
			fillColor: "#dc2626",
			multipier: 30,
		},
	};

	return (
		<div className="map">
			{!show && (
				<div className="loading height-100">
					<img src={loadingGif} alt="loading" />
				</div>
			)}
			{show && (
				<MapContainer center={[map.lat, map.long]} zoom={map.zoom}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>

					{countries.map((country, i) => (
						<Circle
							key={i}
							center={[country.lat, country.long]}
							pathOptions={mapSettings[map.type]}
							radius={country[map.type + "PerOneMillion"] * mapSettings[map.type].multipier}
						>
							<Popup>
								<div className="mapCountryPopup">
									<div className="mapCountryPopup__country">
										<div className="flag">
											<img src={country.flag} alt={country.country} />
										</div>
										<div className="name">{country.country}</div>
									</div>
									<div className="mapCountryPopup__data">
										<div className="cases">
											<span className="circle">●</span>&nbsp;
											<span className="value">
												Cases: {numeral(country.cases).format("0,0")}
											</span>
										</div>
										<div className="recovered">
											<span className="circle">●</span>&nbsp;
											<span className="value">
												Recovered: {numeral(country.recovered).format("0,0")}
											</span>
										</div>
										<div className="deaths">
											<span className="circle">●</span>&nbsp;
											<span className="value">
												Deaths: {numeral(country.deaths).format("0,0")}
											</span>
										</div>
									</div>
								</div>
							</Popup>
						</Circle>
					))}
				</MapContainer>
			)}
		</div>
	);
};

export default Map;
