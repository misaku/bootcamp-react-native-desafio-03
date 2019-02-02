import { createStore, compose, applyMiddleware } from 'redux';
import Tron from '~/config/ReactotronConfig';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const middleware = [];
const sagaMonitor = (__DEV__ ? Tron.createSagaMonitor() : null);

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

const createAppropriateStore = __DEV__ ? Tron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(applyMiddleware(...middleware)));
sagaMiddleware.run(sagas);
export default store;
