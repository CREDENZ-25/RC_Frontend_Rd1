// redux/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // Stores user details
};

export const userSlice = createSlice({
    name: "user", // Slice name (prefix for actions)
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Store user details
        },
        clearUser: (state) => {
            state.user = null; // Clear user data
        },
    },
});

export const { setUser, clearUser } = userSlice.actions; // Export actions
export default userSlice.reducer; // Export reducer
