import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        status: "initial"
    },
    reducers: {
        axiosProjectsLoading: (_, { paylaod: projects}) => ({
            projects,
            status: "loading",
        }),
        axiosPojectsSuccess: (_, { paylaod: projects }) => {
            console.log(projects)
        },
        axiosProjectsError: () => ({
            projects: [],
            status: "error"
        })
    }
})

const selectProjectsState = (state) => state.projects;

export const selectProjects = (state) => selectProjectsState(state).projects;
export const selectProjectsStatus = state => selectProjects(state).status;
export const {axiosProjectsLoading, axiosPojectsSuccess, axiosProjectsError} = projectsSlice.actions;
export default projectsSlice.reducer;