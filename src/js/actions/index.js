let todoId = 0;
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: ++todoId,
	text
})

export const changeTodo = (id) => ({
	type: "CHANGE_TODO",
	id
})

export const toggleFilter = (filter) => ({
	type: "TOGGLE_FILTER",
	filter
})