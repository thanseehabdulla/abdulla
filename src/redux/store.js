import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import rootSaga from './sagas';


const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export {store, history};
