import { configureStore } from "@reduxjs/toolkit";
import { alertSliceReducer } from "./slices/alertSlice";
import { cursorSliceReducer } from "./slices/cursorSlice";

const store = configureStore({
	reducer: {
		alerts: alertSliceReducer,
		cursor: cursorSliceReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
