import { createSlice } from "@reduxjs/toolkit";


const storedUser = JSON.parse(window.localStorage.getItem('user'));

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: storedUser || null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            window.localStorage.setItem('user', JSON.stringify(action.payload))
        },
        removeUser: (state) => {
            state.user = null;
            window.localStorage.removeItem('user')
        },
        // setUserFromLocalStorage: (state) => {
        //     var user = window.localStorage.getItem('user');
        //     if (user) {
        //         user = JSON.parse(user);
        //         state.user = user;
        //     } else {
        //         state.user = null;
        //     }
        // }
    }
});

export const { setUser, removeUser,  } = authSlice.actions;

export default authSlice.reducer;
