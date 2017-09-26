import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {configureStore} from './store/configureStore';
import {Provider} from 'react-redux';
import {DevTools} from './containers/DevTools/DevTools';
import {App} from './containers/App/App';
import './index.scss';

const store = configureStore();

const renderWrapper = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <div>
                    <Component/>
                    <DevTools/>
                </div>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderWrapper(App);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
        renderWrapper(App);
    });
}
