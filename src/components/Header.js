import React, { Component } from 'react';

var relic = 'none';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
			return relic === 'none' ?
				(
					<div className='header'>
						<h1 className='f1'>Relic Tracker</h1>
					</div>
				) :
				(
					<div className='header'>
						<h1 className='f1'>${relic}</h1>
					</div>
				)
	}
}

export default Header;