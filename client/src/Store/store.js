import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore ,
    persistReducer ,
    FLUSH ,
    REHYDRATE ,  
    PAUSE ,
    PERSIST ,
    PURGE ,
    REGISTER      
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authSlice  from '../../src/Store/features/authSlice';
import LocationSlice from '../Store/features/UserLocationSlice'


const LoginpersistConfig = { key: "userAuth" , storage , version : 1};
const LocationpersistConfig = { key : "Location" , storage , version : 1}


const UserLoginpersistReducer = persistReducer(LoginpersistConfig, authSlice.reducer);
const UserLocationpersistReducer = persistReducer(LocationpersistConfig, LocationSlice.reducer);


export const store = configureStore({
  reducer: {
    userAuth: UserLoginpersistReducer,
    Location:UserLocationpersistReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
