// Redux
import { useSelector } from "react-redux";

// Helper
import { formatNumber as f } from "../../helper/helper";

// Images
import GlobePng from "../../images/globe.png";

// Scss
import "./Statistics.scss";

const Statistics = (props) => {
	// Redux
	const covid = useSelector((state) => state.covid);

	return (
		<div className="statistics">
			<div className="statistics__subject">
				<div className="statistics__flag">
					{!covid.flag && <img src={GlobePng} alt="Worldwide" className="noBorder" />}
					{covid.flag && <img src={covid.flag} alt={covid.country} />}
				</div>
				<div className="statistics__title">
					{covid.country} <span className="statistics__continent">({covid.continent})</span>
				</div>
			</div>
			<div className="statistics__table">
				<ul>
					{/* Cases */}
					<li className="yellow">
						<span className="name">Today Cases</span>
						<span className="value">{f(covid.todayCases)}</span>
					</li>
					<li className="yellow">
						<span className="name">Total Cases</span>
						<span className="value">{f(covid.cases)}</span>
					</li>
					<li className="yellow">
						<span className="name">Cases Per Million</span>
						<span className="value">{f(covid.casesPerOneMillion)}</span>
					</li>

					{/* Recovered */}
					<li className="green">
						<span className="name">Today Recovered</span>
						<span className="value">{f(covid.todayRecovered)}</span>
					</li>
					<li className="green">
						<span className="name">Total Recovered</span>
						<span className="value">{f(covid.recovered)}</span>
					</li>
					<li className="green">
						<span className="name">Recovered Per Million</span>
						<span className="value">{f(covid.recoveredPerOneMillion)}</span>
					</li>

					{/* Deaths */}
					<li className="red">
						<span className="name">Today Deaths</span>
						<span className="value">{f(covid.todayDeaths)}</span>
					</li>
					<li className="red">
						<span className="name">Total Deaths</span>
						<span className="value">{f(covid.deaths)}</span>
					</li>
					<li className="red">
						<span className="name">Deaths Per Million</span>
						<span className="value">{f(covid.deathsPerOneMillion)}</span>
					</li>

					{/* Population */}
					<li className="grey">
						<span className="name">Population</span>
						<span className="value">{f(covid.population)}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Statistics;
