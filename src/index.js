import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducer';

ReactDOM.render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
    document.querySelector('#root')
);