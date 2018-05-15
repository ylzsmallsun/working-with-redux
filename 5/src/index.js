import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import { fetchNotes } from './store/actions';
import './index.css';

const store = configureStore();
store.dispatch(fetchNotes());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

