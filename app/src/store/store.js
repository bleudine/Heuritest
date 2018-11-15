import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {logger}                                                   from 'redux-logger'
import createSagaMiddleware            from 'redux-saga'
import mainSaga                   from './mainSaga';

const reducer = (state = {}, action) => {
    switch(action) {
        default:
            return state;
    }
};

const root = combineReducers({
    reducer
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