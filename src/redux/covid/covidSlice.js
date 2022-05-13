import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	country: 'worldwide',
	iso: 'worldwide',
	flag: false,

	cases: 0,
	todayCases: 0,
	casesPerOneMillion: 0,

	deaths: 0,
	todayDeaths: 0,
	deathsPerOneMillion: 0,

	recovered: 0,
	todayRecovered: 0,
	recoveredPerOneMillion: 0,

	active: 0,
	activePerOneMillion: 0,

	tests: 0,
	testsPerOneMillion: 0,

	population: 0,
	continent: 'NAN',
};

export const covidSlice = createSlice({
	name: 'covid',
	initialState,
	reducers: {
		setCovidInfo: (state, action) => { // action.payload = {country: countryName, flag: flag/false, ....}
			// const {
			// 	country = 'worldwide',
			// 	flag = false,
			// 	cases = 0,
			// 	todayCases = 0,
			// 	casesPerOneMillion = 0,
			// 	deaths = 0,
			// 	todayDeaths = 0,
			// 	deathsPerOneMillion = 0,
			// 	recovered = 0,
			// 	todayRecovered = 0,
			// 	active = 0,
			// 	activePerOneMillion = 0,
			// 	tests = 0,
			// 	testsPerOneMillion = 0,
			// 	population = 0,
			// 	continent = 'NAN'
			// } = action.payload;
			// for(property in action.payload){
			// 	if(action.payload[property]){
			// 		state[property] = action.payload[property]
			// 	}
			// }
			return { ...state, ...action.payload };
		},
	}
})

export const { setCovidInfo } = covidSlice.actions;

export default covidSlice.reducer;