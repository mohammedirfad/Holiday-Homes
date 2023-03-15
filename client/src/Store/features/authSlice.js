import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    user: null,
    name: null,
    token: null
};

const authSlice = createSlice({
    name:"userAuth",
    initialState,
    reducers :{
        setLogin : (state, action) => {
            state.name = action.payload.name;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        setLogout : (state) => {
            state.user = null;
            state.token = null;
        },
    },
   
});

export const {setLogin, setLogout} = authSlice.actions;

export default authSlice;