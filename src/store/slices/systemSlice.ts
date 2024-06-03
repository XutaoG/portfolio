import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	displayMode: boolean;
} = {
	displayMode: false,
};

const systemSlice = createSlice({
	name: "system",
	initialState,
	reducers: {
		toggleDisplayMode: (state, action: PayloadAction<boolean>) => {
			state.displayMode = action.payload;
		},
	},
});

export const systemSliceReducer = systemSlice.reducer;
export const { toggleDisplayMode } = systemSlice.actions;
