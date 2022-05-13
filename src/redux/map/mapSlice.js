import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	type: 'cases',
	lat: 32.716525,
	long: 53.073438,
	zoom: 4
};

export const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setMapInfo: (state, action) => { // action.payload = {country: countryName, flag: flag/false, ....}
			return { ...state, ...action.payload };
		},
		setMapType: (state, action) => {
			state.type = action.payload;
		},
		setMapToInitial: (state, action) => {
			return initialState;
		},
	}
})

export const { setMapInfo, setMapType, setMapToInitial } = mapSlice.actions;

export default mapSlice.reducer;