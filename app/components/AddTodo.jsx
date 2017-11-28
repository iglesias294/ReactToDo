var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        if (this.refs.newtodo.value.length > 0) {
            
            this.props.onAddTodo(this.refs.newtodo.value);
            this.refs.newtodo.value = '';
        }
    },
    render: function() {
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Add Todo Item" ref="newtodo"/>
                <button className="button expanded primary">Add</button>
            </form>
        </div>
        );
    }
});

module.exports = AddTodo;

