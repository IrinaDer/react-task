import React from 'react'
import ReactDOM from 'react-dom'
import  './FilterItem.scss'


import { connect }  from 'react-redux'
import { toggleFilter } from '../../actions'


class FilterItem  extends React.Component {
	render() {
		return (
			<a 
				href=""
				className={this.props.active ? 'active' : ''}
				onClick={(e) => {
					e.preventDefault()
					this.props.toggleFilter()
				}}
			>
				{this.props.filter}
			</a>
		)
	}
}

export default FilterItem