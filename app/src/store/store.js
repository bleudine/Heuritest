import { applyMiddleware, combineReducers, compose, createStore }                                  from 'redux';
import thunkMiddleware                                                                             from 'redux-thunk';
import { logger }                                                                                  from 'redux-logger';
// import createSagaMiddleware                                                                        from 'redux-saga';
import { getCryptoListings, receivedCryptoListings, receivedListingsError, setCurrency, setLimit } from "../actions";
// import mainSaga                                                                                    from './mainSaga';
import { listing }                                                                                 from "../reducers";
import apiFactory
                                                                                                   from '../utils/apiFactory';

export function fetchListing (currency, limit, start) {
    return dispatch => {

        dispatch(getCryptoListings());

        return apiFactory(`/api/ticker/?convert=${currency}&limit=${limit}&start=${start}`)
            .then(async success => {

                const json = await success.json();
                dispatch(setLimit(limit));
                dispatch(setCurrency(currency));
                return dispatch(receivedCryptoListings(Object.values(json.data)));
            })
            .catch(error => dispatch(receivedListingsError(error)));

    };
}

const root = combineReducers({
    listing,
});

//const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    root,
    {},
    compose(
        applyMiddleware(
            thunkMiddleware,
            logger
        ),
    )
);

//sagaMiddleware.run(mainSaga);