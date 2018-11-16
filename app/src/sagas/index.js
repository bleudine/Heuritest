import { call, select, put, all, takeEvery }                                                          from 'redux-saga/effects';
import {
    GET_LISTINGS,
    GET_CRYPTO,
    receivedCryptoListings,
    CONVERT_CURRENCY,
    LIMIT_RESULT,
    setLimit,
    setCurrency
} from "../actions";

export function* root () {
    yield all([
        takeEvery(GET_LISTINGS, getListings),
        takeEvery(CONVERT_CURRENCY, getListings),
        takeEvery(LIMIT_RESULT, getListings),
        takeEvery(GET_CRYPTO, getCrypto)
    ])
}

function* getListings ({currency, limit, start}) {
    try {

        const response = yield call(fetch, `/api/ticker/?convert=${currency}&limit=${limit}&start=${start}`);

        const json = yield call([response, 'json']);

        const cryptoListing = Object.values(json.data);

        yield put(receivedCryptoListings(cryptoListing));

        yield put(setLimit(limit));
        yield put(setCurrency(currency));

    } catch (e) {
        console.error(e)
    }
}

function* getCrypto ({ id }) {
    try {
        const response = yield call(fetch, '/api/ticker/' + id);

        const json = yield call([response, 'json']);
        console.log(json);

    } catch (e) {
        console.error(e)
    }
}

function* convertCurrency ({ currency }) {
    try {
        const response = yield call(fetch, '/api/')
    } catch (e) {
        console.error(e)
    }
}