import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState: {
        user:null,
        
    }
})