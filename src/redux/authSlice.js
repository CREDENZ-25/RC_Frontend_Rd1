import {createSlice} from "@reduxjs/toolkit";

const initialState={
    isAuth:false,
    
    // Initial authentication state (false means user is not logged in)
}

export const authSlice=createSlice({
    
    name: "auth", // Slice name
    initialState,
    reducers: {
        authUser: (state,action) => {
            
            state.isAuth = true;
        },
        notAuthUser: (state,action) => {
            
            state.isAuth = false;
        },
    },
    
    
    
})
export const { authUser, notAuthUser } = authSlice.actions;
export default authSlice.reducer;
