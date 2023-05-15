import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        changeTheme: false
    },
    reducers: {
        toggleTheme: state => {
            state.changeTheme = !state.changeTheme;
        }
    }
})

const selectThemeState = state => state.changeTheme;

export const selectTheme = state => selectThemeState(state).changeTheme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;