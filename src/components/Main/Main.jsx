// Components
import OverallStatsBoxes from "../OverallStatsBoxes/OverallStatsBoxes";
import Statistics from "../Statistics/Statistics";
import LiveCasesByCountry from "../LiveCasesByCountry/LiveCasesByCountry";
import WorldwideStatsCharts from "../WorldwideStatsCharts/WorldwideStatsCharts";
import Map from "../Map/Map";

// Scss
import "./Main.scss";

const Main = (props) => {
	return (
		<main className="main">
			<div className="container mx-auto">
				<div className="main__left">
					{/* Overall Stats Boxes */}
					<OverallStatsBoxes />

					{/* Statics */}
					<Statistics />

					{/* Map */}
					<Map />
				</div>
				<div className="main__right">
					<LiveCasesByCountry />
					<WorldwideStatsCharts />
				</div>
			</div>
		</main>
	);
};

export default Main;
