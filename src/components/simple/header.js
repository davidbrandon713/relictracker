import React from 'react';
import SearchBox from './searchbox';

import './simple.css';

const Header = ({ onSearchChange }) => {
	return (
		<div className="header-container">
			<div className="header-title">
				<h1 className="header">Relic Tracker</h1>
				<SearchBox onSearchChange={onSearchChange} />
			</div>
			<div className="create-container">
				<div
					className="card"
					id="createRelic"
					onClick={() => null}
				>
					<h1 className="cardTitle">Add Relic</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
