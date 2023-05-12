import { all } from "redux-saga/effects";
import { projectsSaga } from "./features/api/getProjectsSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga()
    ])
}