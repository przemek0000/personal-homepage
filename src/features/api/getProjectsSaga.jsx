import { call, delay, put, takeLatest } from "redux-saga/effects";
import { axiosPojectsSuccess, axiosProjectsError, axiosProjectsLoading } from './getProjectsSlice';
import getProjectsApi from "./getProjectsApi";

function* axiosProjectsHandler() {
    try {
        yield delay(1000);
        // const projects = yield call(getProjectsApi);
        const projects = [{ id: 1, name: "test 1" }, { id: 2, name: "test 2" }];
        yield put(axiosPojectsSuccess(projects));
    } catch (error) {
        yield put(axiosProjectsError());
    }
}

export function* projectsSaga() {
    yield takeLatest(axiosProjectsLoading.type, axiosProjectsHandler);
}