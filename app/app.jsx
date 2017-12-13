var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {hashHistory} = require('react-router');
import router from 'app/router/';

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('applicationStyles')


//import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
//var TodoAPI = require('TodoAPI');
//import Login from 'Login';
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
})

store.dispatch(actions.startAddTodos());

//Public private pages


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById("app")
);
