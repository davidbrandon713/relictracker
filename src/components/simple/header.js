import React, { useState } from 'react'
import SearchBox from './searchbox'
import Form from '../../containers/form/form'

import './simple.css'

const Header = ({ onSearchChange, onCreateRelic }) => {
	const [popupTrigger, setPopupTrigger] = useState(false)
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
					onClick={() => setPopupTrigger(!popupTrigger)}
				>
					<h1 className="cardTitle">Add Relic</h1>
				</div>
			</div>
			{popupTrigger && (
				<Form
					onCreateRelic={onCreateRelic}
					setPopupTrigger={setPopupTrigger}
				/>
			)}
		</div>
	)
}

export default Header
