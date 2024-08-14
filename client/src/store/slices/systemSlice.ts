import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

const initialState: {
	darkMode: boolean;
	canvasMode: boolean;
} = {
	darkMode: cookies.get("display-mode")?.darkMode,
	canvasMode: cookies.get("canvas") ? cookies.get("canvas").on : true,
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
