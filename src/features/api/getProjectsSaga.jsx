import { call, delay, put, takeLatest } from "redux-saga/effects";
import { axiosPojectsSuccess, axiosProjectsError, axiosProjectsLoading } from './getProjectsSlice';
import getProjectsApi from "./getProjectsApi";

function* axiosProjectsHandler() {
    try {
        // const projects = yield call(getProjectsApi);
        const projects= "test";
        yield put(axiosPojectsSuccess(projects));
    } catch (error) {
        yield put(axiosProjectsError());
    }
}

export function* projectsSaga() {
    yield takeLatest(axiosProjectsLoading.type, axiosProjectsHandler);
}