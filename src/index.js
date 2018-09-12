import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

import { loadState, saveState } from './localeStorage'

import App from './components/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistendState = loadState();

const store = createStore(reducer, persistendState, devTools);

const rootEl = document.getElementById('root');

store.subscribe(() => saveState(store.getState()));

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl
);
render();