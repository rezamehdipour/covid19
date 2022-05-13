import { configureStore } from "@reduxjs/toolkit";

// Slices
import covidReducer from './covid/covidSlice';
import countriesReducer from './countries/countriesSlice';
import mapReducer from "./map/mapSlice";
import popupReducer from "./popup/popupSlice";

export default configureStore({
	reducer: {
		covid: covidReducer,
		countries: countriesReducer,
		map: mapReducer,
		popup: popupReducer
	},
})