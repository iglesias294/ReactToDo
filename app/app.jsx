var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('applicationStyles')

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
