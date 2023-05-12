import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        status: "initial"
    },
    reducers: {
        axiosProjectsLoading: (_, { payload: projects}) => ({
            projects,
            status: "loading",
        }),
        axiosPojectsSuccess: (_, { payload: projects }) => ({
            projects,
            status: "success"
        }),
        axiosProjectsError: () => ({
            projects: [],
            status: "error"
        })
    }
})

const selectProjectsState = (state) => state.projects;

export const selectProjects = (state) => selectProjectsState(state).projects;
export const selectProjectsStatus = (state) => selectProjectsState(state).status;
export const {axiosProjectsLoading, axiosPojectsSuccess, axiosProjectsError} = projectsSlice.actions;
export default projectsSlice.reducer;