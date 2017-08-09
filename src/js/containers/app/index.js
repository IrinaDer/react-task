import React from 'react'
import ReactDOM from 'react-dom'
import CreateTodo  from '../CreateTodo'
import TodoList  from '../TodoList'
import Filter  from '../Filter'

export default class App extends React.Component {
  render() {
    return (
    	<div>
			<CreateTodo />
			<TodoList />
			<Filter />
		</div>

    	)
  }
}


