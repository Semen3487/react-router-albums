import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevtools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const sagaMiddleweare = createSagaMiddleware();

const middleWeare = applyMiddleware(sagaMiddleweare, logger);

// export default createStore(Reducer, composeWithDevtools(middleWeare));

sagaMiddleweare.run(rootSaga);