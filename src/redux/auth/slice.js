const { createSlice } = require("@reduxjs/toolkit");
const { registerUser } = require("./operations");


const initialState = {
    user: { name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState, 
    extraReducers: {
        [registerUser.fulfilled] (state, action) {
            console.log(action.payload)
            // state.user = action.payload.user;
            // state.token = action.payload.token;
            // state.isLoggedIn = true;
        },
        [registerUser.rejected] (state, action) {
            console.log(action.payload)
        },
    }
});

export const authReducer = authSlice.reducer;