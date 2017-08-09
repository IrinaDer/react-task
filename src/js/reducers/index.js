import { combineReducers } from 'redux'
import  todos from './todos'
import  filter from './filter'


let reducer = combineReducers({
	todos,
	filter
})

export default reducer 