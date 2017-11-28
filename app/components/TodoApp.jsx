var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog', 
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'take a shower',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'make breakfast',
                    completed: false
                }
            ]
        };
    },
    handleAddToDo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text, 
                    completed: false
                }
            ]
        })
    },
    handleToggle: function (id) {
        //alert(id);
        var updatedTodos = this.state.todos.map( function (todo) {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: updatedTodos});
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var {todos} = this.state;
        return (<div>
            <h1>To-Do App</h1>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddToDo}/>
            </div>)
    }
});

module.exports = TodoApp;