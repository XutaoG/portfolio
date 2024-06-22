import { configureStore } from "@reduxjs/toolkit";
import { systemSliceReducer } from "./slices/systemSlice";

const store = configureStore({
	reducer: {
		system: systemSliceReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
