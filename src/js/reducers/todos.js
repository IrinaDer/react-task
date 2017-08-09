const todo = (state, action) => {
	switch(action.type) {
		case "ADD_TODO":
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case "CHANGE_TODO":
			if(state.id == action.id) {
				state.completed = !state.completed
			}
			return state	
	}
}

const todos = (state=[], action)=> {
	switch(action.type) {
		case "ADD_TODO":
			return	[
				...state,
				todo(state, action)
			]
		case "CHANGE_TODO":
			return (
				state.map((val, i) => {
					return todo(val, action)	
					
				})
			)		
		default: 
			return state
	}

}

export default todos