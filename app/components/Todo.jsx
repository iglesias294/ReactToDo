var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');


var Todo = React.createClass({

    render: function(){
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassname = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed';
                timestamp = completedAt;

            }

            return message + moment.unix(timestamp).format('MMMM Do @ h:mm a');
        };
        return (
        <div className={todoClassname} onClick={() => {
            //this.props.onToggle(id);
            dispatch(actions.startToggleTodo(id, !completed));
        }}>
            <div>
                <input type="checkbox" checked={completed}/>
            </div>
            <div>
                <p>{text}</p>
                <p clasName="todo__subtext">{renderDate()}</p>
            </div>
        </div>
        );
    }
});

module.exports = connect()(Todo);
