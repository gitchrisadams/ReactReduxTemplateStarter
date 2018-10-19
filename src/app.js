import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import JsonReactApp from './components/JsonReactApp';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/styles.scss';

// Redux imports:
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {jsonFormActions} from './actions/jsonFormActions';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

//store.dispatch(jsonFormActions('My fancy value...'));

/* Sets up React app so it can use the store/redux */
const jsx = (
  <Provider store={store}>
    <JsonReactApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));





