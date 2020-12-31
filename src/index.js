
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer as formReducer } from 'redux-form';
import rootReducer from './reducers/rootReducer';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';


const reducers = {
    // ... your other reducers here ...
    form: formReducer,
    rootReducer: rootReducer
}
const reducer = combineReducers(reducers)



const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);