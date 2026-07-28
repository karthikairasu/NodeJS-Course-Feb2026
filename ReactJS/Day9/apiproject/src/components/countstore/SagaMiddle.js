import { put, takeEvery } from "redux-saga/effects";

function* incrementAsync(){
    yield new Promise(resolve => setTimeout(resolve, 3000));
    yield put({type:"INCREMENT"})
}

function* watchIncrementAsync(){
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function*watchIncrementAsync1(){
    yield watchIncrementAsync();
}