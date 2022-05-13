import numeral from "numeral";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setMapType } from "../../redux/map/mapSlice";

// Scss
import "./OverallStatsBoxes.scss";

const OverallStatsBoxes = () => {
	const dispatch = useDispatch();
	const covid = useSelector((state) => state.covid);
	const map = useSelector((state) => state.map);

	const handleMapTypeChange = (newType) => {
		dispatch(setMapType(newType));
	};

	return (
		<div className="overallStatsBoxes">
			{/* Cases Box */}
			<div
				className={"overallStatsBox" + (map.type === "cases" ? " overallStatsBox--active" : "")}
				onClick={() => handleMapTypeChange("cases")}
			>
				<div className="overallStatsBox__title">Cases</div>
				<div className="overallStatsBox__cases">+{numeral(covid.todayCases).format("0.0a")}</div>
				<div className="overallStatsBox__total">{numeral(covid.cases).format("0.0a")} Total</div>
			</div>

			{/* Recovered Box */}
			<div
				className={"overallStatsBox" + (map.type === "recovered" ? " overallStatsBox--active" : "")}
				onClick={() => handleMapTypeChange("recovered")}
			>
				<div className="overallStatsBox__title">Recovered</div>
				<div className="overallStatsBox__cases">+{numeral(covid.todayRecovered).format("0.0a")}</div>
				<div className="overallStatsBox__total">{numeral(covid.recovered).format("0.0a")} Total</div>
			</div>

			{/* Deaths Box */}
			<div
				className={"overallStatsBox" + (map.type === "deaths" ? " overallStatsBox--active" : "")}
				onClick={() => handleMapTypeChange("deaths")}
			>
				<div className="overallStatsBox__title">Deaths</div>
				<div className="overallStatsBox__cases">+{numeral(covid.todayDeaths).format("0.0a")}</div>
				<div className="overallStatsBox__total">{numeral(covid.deaths).format("0.0a")} Total</div>
			</div>
		</div>
	);
};

export default OverallStatsBoxes;
