import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { logger }                                                 from 'redux-logger'
import createSagaMiddleware                                       from 'redux-saga'
import mainSaga                                                   from './mainSaga';
import { listing }                                    from "../reducers";

const root = combineReducers({
    listing,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    root,
    {},
    compose(
        applyMiddleware(
            sagaMiddleware,
            logger
        ),
    )
);

sagaMiddleware.run(mainSaga);