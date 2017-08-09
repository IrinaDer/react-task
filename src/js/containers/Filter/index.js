import React from 'react'
import ReactDOM from 'react-dom'
import { connect }  from 'react-redux'
import FilterItem from '../../components/FilterItem'
import { toggleFilter } from '../../actions'

class Filter  extends React.Component {

	constructor() {
		super()
		this.filters = ['all', 'completed', 'active'];
	}

	tglFilter (filter) {
		this.props.onToggleFilter(filter)
	}
	tglActive (filter, val) {
		if(filter == val)
			return true
		else
			return false
	}

	render() {

		return (
			<div className="filter">
				{this.filters.map((val, i) => (
					<FilterItem 
						key={i} 
						filter={val}
						active={this.tglActive(this.props.filter, val)}
						toggleFilter={this.tglFilter.bind(this, val)}
					/>
				))}
			</div>
		)
	}
}

export default connect(
	state => ({
		filter: state.filter
	}),
	dispatch => ({
		onToggleFilter: (filter) => {
			dispatch(toggleFilter(filter))
		}	
	
	})
)(Filter)