import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

const initialState: {
	canvasMode: boolean;
} = {
	canvasMode: cookies.get("canvas") ? cookies.get("canvas").on : true,
};

const systemSlice = createSlice({
	name: "system",
	initialState,
	reducers: {
		toggleCanvasMode: (state, action: PayloadAction<boolean>) => {
			state.canvasMode = action.payload;
		},
	},
});

export const systemSliceReducer = systemSlice.reducer;
export const { toggleCanvasMode } = systemSlice.actions;
