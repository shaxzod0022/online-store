// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Bu middleware'ni o'chirib qo'yadi  
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
