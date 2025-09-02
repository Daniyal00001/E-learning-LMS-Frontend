import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import authApi from "../features/api/authApi"; // 👈 import your api

export const store = configureStore({
  reducer: {
    auth: authReducer,                        
    [authApi.reducerPath]: authApi.reducer,   // 👈 add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // 👈 add RTK Query middleware
});
