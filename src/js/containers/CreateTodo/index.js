import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import './CreateTodo.scss'



class CreateTodo extends React.Component {

	constructor() {
		super()

		this.state = {
			input: ''
		}

		this.input = ''
	}

	addHandler() {	
		let inp = this.input;

		if(inp.value != '') {
			this.props.onAddTodo(inp.value);
			inp.value = ''
			inp.focus()
		}

	}

	render() {
		
		return (
			<div className="create-block">
				<input  type="text" 
						placeholder="Name"  
						ref={(el) => this.input = el }
				 /> 
				<button onClick={::this.addHandler}>
					Add todo
				</button>
			</div>
		)
	}

}

export default connect(
	state => ({}),
	dispatch => ({
		onAddTodo: (todoName) => {
			dispatch(addTodo(todoName))

		}
	})
)(CreateTodo)