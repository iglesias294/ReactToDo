var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'take a shower'
                },
                {
                    id: 4,
                    text: 'make breakfast'
                }
            ]
        };
    },
    handleAddToDo: function (text) {
        alert('New todo: ' + text);
        this.state.todos.push({
            id: this.state.todos.length,
            text: text
        });
    },
    render: function() {
        var {todos} = this.state;
        return (<div>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddToDo}/>
            </div>)
    }
});

module.exports = TodoApp;