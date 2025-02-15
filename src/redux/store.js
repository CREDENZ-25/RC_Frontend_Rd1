import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
    key: "root",
    storage,
  };

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
    reducer: {
      auth: persistedAuthReducer, // Persist the auth slice
    },
  });
  
  export const persistor = persistStore(store);  