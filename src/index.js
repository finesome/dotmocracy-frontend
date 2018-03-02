import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { default as store } from 'model/Store'

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
