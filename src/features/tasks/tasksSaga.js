import { call, put, select, takeEvery, takeLatest, delay } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setLoading, setTasks } from "./tasksSlice"

function* fetchExampleTasksHandler() {

    try {
        yield put(setLoading(true));
        yield delay(1000);

        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
    yield put(setLoading(false));
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};

