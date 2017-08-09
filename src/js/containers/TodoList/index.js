import React from 'react'
import ReactDOM from 'react-dom'
import { connect }  from 'react-redux'
import { changeTodo }  from '../../actions'
import './TodoList.scss'

const filterTodo = (todos, filter) => {
	switch (filter) {
		case 'all':
			return todos
		case 'completed':
			return todos.filter((val) => {
				return val.completed == true
			})
		case 'active':
			return todos.filter((val) => {
				return val.completed == false
			})
		default:
			return todos
	}
}

class TodoList extends React.Component {

	render() {
		return (
			<ul className="todo-list"> 
				{this.props.todos.map((val, i) => 
					<li 
						key={i}
						className={val.completed ? 'completed' : ''}
						onClick={this.props.onChangeTodo.bind(this, val.id)}
					>{val.text}</li>
				)}
			</ul>
		)
	}
}

export default connect(
	state => ({
		todos: filterTodo(state.todos, state.filter)
	}),

	dispatch => ({
		onChangeTodo: (todoId) => {
			dispatch(changeTodo(todoId))
		}
	})
)(TodoList)
