import { all } from 'redux-saga/effects';
import {root} from '../sagas';

export default function* mainSaga() {
    yield all([
        root(),
    ])
}