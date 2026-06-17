import { configureStore, createSlice } from "@reduxjs/toolkit";

const userLogSlice = createSlice({
    name: "userLog",
    initialState: {
        "isLogged": false
    },
    reducers: {
        setLogged: (state, action) => {
            // { type: "userLog/setLogged", payload: false}
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
            // { type: "userInfo/setUser", payload:{"email": "random@email.com","firstName": "Ran","lastName": "Dom","userName": "random","createdAt": "2026-06-08T13:19:03.871Z","updatedAt": "2026-06-08T13:19:03.871Z","id": "randomIDavecdesnumero12345"}}

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
