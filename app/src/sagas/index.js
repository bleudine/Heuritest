import {call, select, put, all, takeEvery}                  from 'redux-saga/effects';
import { GET_LISTINGS, GET_CRYPTO, receivedCryptoListings } from "../actions";

export function* root() {
    yield all([
        takeEvery(GET_LISTINGS, getListings),
        takeEvery(GET_CRYPTO, getCrypto)
    ])
}

function* getListings() {
    try {
        const response = yield call(fetch, '/api/ticker');

        const json = yield call([response, 'json']);

        const cryptoListing = Object.values(json.data);

        yield put(receivedCryptoListings(cryptoListing));

    } catch (e) {
        console.error(e)
    }
}

function* getCrypto({id}) {
    try {
        const response = yield call(fetch, '/api/ticker/' + id);

        const json = yield call([response, 'json']);
        console.log(json);

    } catch (e) {
        console.error(e)
    }
}