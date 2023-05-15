import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import projectsReducer from "./features/api/getProjectsSlice";
import themeReducer from "./features/theme/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        changeTheme: themeReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;   