import { configureStore } from "@reduxjs/toolkit";
import { alertSliceReducer } from "./slices/alertSlice";

const store = configureStore({
	reducer: {
		alerts: alertSliceReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
