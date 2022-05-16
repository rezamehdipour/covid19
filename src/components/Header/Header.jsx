import { useEffect } from "react";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setCovidInfo } from "../../redux/covid/covidSlice";
import { setCountriesInfo } from "../../redux/countries/countriesSlice";
import { setMapInfo } from "../../redux/map/mapSlice";
import { setMapToInitial } from "../../redux/map/mapSlice";
import { togglePopupShow } from "../../redux/popup/popupSlice";

// Images
import covid19 from "../../images/covid19.png";

// Scss
import "./Header.scss";

const Header = (props) => {
	const apiUrl = "https://disease.sh/v3/covid-19"; // Api Url

	const dispatch = useDispatch();
	const covid = useSelector((state) => state.covid);
	const countries = useSelector((state) => state.countries);
	//     ↨
	useEffect(() => {
		// Fetch countries data and insert them to redux when component did mount!
		const fetchCountriesData = async () => {
			const { data } = await axios.get(`${apiUrl}/countries`);
			let c = [];
			for (const d of data) {
				c.push({
					country: d.country,
					iso: d.countryInfo.iso2,
					lat: d.countryInfo.lat,
					long: d.countryInfo.long,
					flag: d.countryInfo.flag,
					cases: d.cases,
					casesPerOneMillion: d.casesPerOneMillion,
					recovered: d.recovered,
					recoveredPerOneMillion: d.recoveredPerOneMillion,
					deaths: d.deaths,
					deathsPerOneMillion: d.deathsPerOneMillion,
				});
			}
			dispatch(setCountriesInfo(c));
		};
		fetchCountriesData();

		// eslint-disable-next-line
	}, []);

	// Change the intended country!
	const handleChangeCountry = (event) => {
		const intendedCountryName = event.target.selectedOptions[0].label;
		const intendedCountryIso = event.target.value;
		dispatch(setCovidInfo({ country: intendedCountryName, iso: intendedCountryIso }));

		// set map
		if (intendedCountryIso === "worldwide") {
			dispatch(setMapToInitial());
		} else {
			const { lat, long } = countries.find((country) => country.iso === intendedCountryIso);
			dispatch(setMapInfo({ lat: lat, long: long, zoom: 6 }));
		}
	};

	// When user changed intended country!
	useEffect(() => {
		const handleGetCountryInfo = async () => {
			let getCountryInfoUrl;
			if (covid.iso === "worldwide") {
				getCountryInfoUrl = `${apiUrl}/all`;
			} else {
				getCountryInfoUrl = `${apiUrl}/countries/${covid.iso}`;
			}
			const { data } = await axios.get(getCountryInfoUrl); // Fetch country data from api

			// let country = "country" in data ? data.country : "worldwide";
			// let iso = "countryInfo" in data ? data.countryInfo.iso2 : "worldwide";
			let flag = "countryInfo" in data ? data.countryInfo.flag : false; //  Flag
			let continent = "continent" in data ? data.continent : ""; // Continent
			const result = {
				// country: country,
				// iso: iso,
				flag: flag,

				cases: data.cases,
				todayCases: data.todayCases,
				casesPerOneMillion: data.casesPerOneMillion,

				deaths: data.deaths,
				todayDeaths: data.todayDeaths,
				deathsPerOneMillion: data.deathsPerOneMillion,

				recovered: data.recovered,
				todayRecovered: data.todayRecovered,
				recoveredPerOneMillion: data.recoveredPerOneMillion,

				active: data.active,
				activePerOneMillion: data.activePerOneMillion,

				tests: data.tests,
				testsPerOneMillion: data.testsPerOneMillion,

				population: data.population,
				continent: continent,
			};
			dispatch(setCovidInfo(result));
		};
		handleGetCountryInfo();

		// eslint-disable-next-line
	}, [covid.country]);

	return (
		<header className="header">
			<div className="header__container container mx-auto">
				<div className="header__logo" onClick={() => dispatch(togglePopupShow())}>
					<img src={covid19} alt="Covid19 Tracker" />
				</div>

				<div className="header__dropdown">
					<select onChange={handleChangeCountry}>
						<option value="worldwide">Worldwide</option>
						{countries.map(({ country, iso }, i) => (
							<option key={i} value={iso}>
								{country}
							</option>
						))}
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
