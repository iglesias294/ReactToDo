var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.newtodo.value;

        var {dispatch} = this.props;
        if (todoText.length > 0) {
            this.refs.newtodo.value = '';
            dispatch(actions.startAddTodo(todoText));
            
            
        }
    },
    render: function() {
        return (
        <div className="container__footer">
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Add Todo Item" ref="newtodo"/>
                <button className="button expanded primary">Add</button>
            </form>
        </div>
        );
    }
});

module.exports = connect()(AddTodo);

