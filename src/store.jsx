import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import projectsReducer from "./features/api/getProjectsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;   