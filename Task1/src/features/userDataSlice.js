import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// get All user data api call
export const getUser = createAsyncThunk("getUser",async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.log("error",error)
        return error
    }
});


export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getUser.pending]:(state)=>{
            state.loading = true
        },
        [getUser.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users = action.payload
        },
        [getUser.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    }
});

export default userDetail.reducer;