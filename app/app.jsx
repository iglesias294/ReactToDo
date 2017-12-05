var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//import './../playground/firebase/index';

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('applicationStyles')

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//   var state = store.getState();
//
//   console.log('New State', store.getState());
//
//   TodoAPI.setTodos(state.todos);
//
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
