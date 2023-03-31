import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";


const initialState ={
    name:null,
    longitude:77.5937,
    latitude:12.9719,
};

const LocationSlice = createSlice({
    name:'Location',
    initialState,
    reducers:{
        setLocation: (state,action) =>{
            state.name = action.name;
            state.longitude = action.longitude;
            state.latitude = action.latitude;
        },
    }
});

export const { setLocation } = LocationSlice.actions;

export default LocationSlice;