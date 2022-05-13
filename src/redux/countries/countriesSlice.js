import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		setCountriesInfo: (state, action) => {
			return action.payload;
		},
	}
})

export const { setCountriesInfo } = countriesSlice.actions;

export default countriesSlice.reducer;