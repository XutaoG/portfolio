import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	darkMode: boolean;
	canvasMode: boolean;
} = {
	darkMode: false,
	canvasMode: false,
};

const systemSlice = createSlice({
	name: "system",
	initialState,
	reducers: {
		toggleDarkMode: (state, action: PayloadAction<boolean>) => {
			state.darkMode = action.payload;
		},

		toggleCanvasMode: (state, action: PayloadAction<boolean>) => {
			state.canvasMode = action.payload;
		},
	},
});

export const systemSliceReducer = systemSlice.reducer;
export const { toggleDarkMode, toggleCanvasMode } = systemSlice.actions;
