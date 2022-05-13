import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		togglePopupShow: (state, action) => {
			return !state;
		}
	}
})

export const { togglePopupShow } = popupSlice.actions;

export default popupSlice.reducer;