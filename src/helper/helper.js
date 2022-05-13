function formatNumber(number) {
	let stringNumber = number.toString();
	let Regex = new RegExp('(-?[0-9]+)([0-9]{3})');
	while (Regex.test(stringNumber)) {
		stringNumber = stringNumber.replace(Regex, '$1,$2');
	}
	return stringNumber;
}

export { formatNumber };

// ——————————————————————————

function sortByActiveCases(data) {
	const sortedData = [...data];
	sortedData.sort((a, b) => {
		if (a.cases > b.cases) {
			return -1;
		}
		else if (a.cases === b.cases) {
			return 0;
		}
		else {
			return 1;
		}
	});
	return sortedData;
}

export { sortByActiveCases };