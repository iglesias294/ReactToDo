var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('applicationStyles')

var TodoApp = require('TodoApp');

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
);
