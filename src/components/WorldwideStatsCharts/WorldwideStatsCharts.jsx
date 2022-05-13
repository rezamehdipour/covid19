import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

// Scss
import "./WorldwideStatsCharts.scss";

const WorldwideRecoveredChart = (props) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=90");
			setData(data);
		};
		fetchData();
	}, []);

	const buildChartData = (datas) => {
		const chartData = [];
		let lastDataPoint;
		// for (let date in datas) {
		// 	let newDataToBeInserted = {
		// 		x: date,
		// 		y: datas[date],
		// 	};
		// 	chartData.push(newDataToBeInserted);
		// }

		for (let date in datas) {
			if (lastDataPoint) {
				let newY = datas[date] - lastDataPoint < 0 ? 0 : datas[date] - lastDataPoint;
				let newDataToBeInserted = {
					x: date,
					y: newY,
				};
				chartData.push(newDataToBeInserted);
			}
			lastDataPoint = datas[date];
		}

		return chartData;
	};

	return (
		<div className="worldwideStatsCharts">
			<div className="worldwideStatsCharts__title">Worldwide Stats Charts</div>

			{/* Cases Chart */}
			<div className="worldwideStatsCharts__chart">
				{"cases" in data && (
					<Line
						data={{
							datasets: [
								{
									data: buildChartData(data.cases),
									label: "Cases",
									borderColor: "#F59E0B",
									backgroundColor: "rgba(245, 159, 11, 0.3)",
									fill: true,
								},
							],
						}}
					/>
				)}
			</div>

			{/* Recovered Chart */}
			<div className="worldwideStatsCharts__chart">
				{"recovered" in data && (
					<Line
						data={{
							datasets: [
								{
									data: buildChartData(data.recovered),
									label: "Recovered",
									borderColor: "#10B981",
									backgroundColor: "rgba(16, 185, 129, 0.3)",
									fill: true,
								},
							],
						}}
					/>
				)}
			</div>

			{/* Deaths Chart */}
			<div className="worldwideStatsCharts__chart">
				{"deaths" in data && (
					<Line
						data={{
							datasets: [
								{
									data: buildChartData(data.deaths),
									label: "Deaths",
									borderColor: "#DC2626",
									backgroundColor: "rgba(220, 38, 38, 0.3)",
									fill: true,
								},
							],
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default WorldwideRecoveredChart;
