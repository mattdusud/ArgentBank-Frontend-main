import { configureStore, createSlice } from "@reduxjs/toolkit";

const userLogSlice = createSlice({
    name: "userLog",
    initialState: {
        "isLogged": false
    },
    reducers: {
        setLogged: (state, action) => {
            state.isLogged = action.payload;
        }
    }
});

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        "email": "",
        "firstName": "",
        "lastName": "",
        "userName": "",
        "createdAt": "",
        "updatedAt": "",
        "id": ""
    },
    reducers: {
        setUser: (state, action) => {
            const data = action.payload;
            return data;
        }
    }
});

export const { setUser } = userInfoSlice.actions;
export const { setLogged } = userLogSlice.actions;
export const store = configureStore({
    reducer: {
        userInfo: userInfoSlice.reducer,
        userLog: userLogSlice.reducer
    },
    devTools: true
})
