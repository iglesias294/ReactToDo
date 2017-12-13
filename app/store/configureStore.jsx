import * as redux from 'redux';
import thunk from 'redux-thunk';
//var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');
//var redux = require('redux');


import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

export var configure = () => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    });
    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));
    return store;
};
