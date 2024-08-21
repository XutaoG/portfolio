import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertObj } from "../../models/alert";
import { v4 as uuidv4 } from "uuid";

const initialState: {
	alerts: AlertObj[];
} = {
	alerts: [],
};

const alertSlice = createSlice({
	name: "alerts",
	initialState,
	reducers: {
		addAlert: (state, action: PayloadAction<AlertObj>) => {
			if (state.alerts.length >= 3) {
				return;
			}

			action.payload.id = uuidv4();

			const updatedAlerts = [action.payload, ...state.alerts];
			state.alerts = updatedAlerts;
		},

		removeAlert: (state, action: PayloadAction<AlertObj>) => {
			const updatedAlerts = state.alerts.filter((alert) => {
				return alert.id !== action.payload.id;
			});
			state.alerts = updatedAlerts;
		},
	},
});

export const alertSliceReducer = alertSlice.reducer;
export const { addAlert, removeAlert } = alertSlice.actions;
