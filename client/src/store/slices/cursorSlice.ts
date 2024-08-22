import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
	name: "alerts",
	initialState: "pointer",
	reducers: {
		setCursor: (_, action: PayloadAction<string>) => {
			return action.payload;
		},
	},
});

export const cursorSliceReducer = cursorSlice.reducer;
export const { setCursor } = cursorSlice.actions;
