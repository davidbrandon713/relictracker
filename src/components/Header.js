import React, { Component } from 'react';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
			return (
					<div className='header'>
						<h1 className='f1'>Relic Tracker</h1>
					</div>
      )
	}
}

export default Header;