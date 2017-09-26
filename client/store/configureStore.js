import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from '../reducers/index';
import { DevTools } from '../containers/DevTools/DevTools';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const enhancer = compose(
    middleware,
    DevTools.instrument()
);

export const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const { rootReducer } = require('../reducers/index');
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};
