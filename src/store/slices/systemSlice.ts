import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	darkMode: boolean;
} = {
	darkMode: false,
};

const systemSlice = createSlice({
	name: "system",
	initialState,
	reducers: {
		toggleDarkMode: (state, action: PayloadAction<boolean>) => {
			state.darkMode = action.payload;
		},
	},
});

export const systemSliceReducer = systemSlice.reducer;
export const { toggleDarkMode } = systemSlice.actions;
