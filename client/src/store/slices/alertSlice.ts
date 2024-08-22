import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertObj } from "../../models/alert";

const initialState: {
	alert: AlertObj | null;
} = {
	alert: null,
};

const alertSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		setAlert: (state, action: PayloadAction<AlertObj>) => {
			return { ...state, alert: action.payload };
		},

		clearAlert: (state) => {
			return { ...state, alert: null };
		},
	},
});

export const alertSliceReducer = alertSlice.reducer;
export const { setAlert, clearAlert } = alertSlice.actions;
