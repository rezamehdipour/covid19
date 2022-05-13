// Redux
import { useSelector } from "react-redux";

// Helper
import { formatNumber as f } from "../../helper/helper";
import { sortByActiveCases } from "../../helper/helper";

// Scss
import "./LiveCasesByCountry.scss";

const LiveCasesByCountry = (props) => {
	const countries = useSelector((state) => state.countries);

	return (
		<div className="liveCasesByCountry">
			<div className="liveCasesByCountry__title">Live Cases By Country</div>
			<div className="liveCasesByCountry__table">
				<table>
					<tbody>
						{countries.length > 0 &&
							sortByActiveCases(countries).map(({ country, cases }, i) => (
								<tr key={i}>
									<td>{country}</td>
									<td>{f(cases)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LiveCasesByCountry;
