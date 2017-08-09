const filter = (state=[], action) => {
	switch(action.type) {
		case "TOGGLE_FILTER":
			return action.filter
		default:
			return state
	}
}

export default filter