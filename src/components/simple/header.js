import React, { useState } from 'react'
import SearchBox from './searchbox'
import Form from '../../containers/form/form'

import './simple.css'

const Header = ({ onSearchChange, onCreateRelic, iconSize, setIconSize }) => {
	const [popupTrigger, setPopupTrigger] = useState(false)
	return (
		<div className="header-container">
			<div className="header-box">
				<h1 className="header-title">Relic Tracker</h1>
				<SearchBox onSearchChange={onSearchChange} />
			</div>
			<div className="controls-box">
				<p className="controls-title">Card size:</p>
				<button
					className="header-button"
          style={{
            border: iconSize === 'small' && '1px solid #c7d1d6'
          }}
					onClick={() => setIconSize('small')}
				>
					Small
				</button>
				<button
					className="header-button"
          style={{
            border: iconSize === 'large' && '1px solid #c7d1d6'
          }}
					onClick={() => setIconSize('large')}
				>
					Large
				</button>
			</div>
			<div className="create-box">
				<button
					className="header-button"
					id="createRelic"
					onClick={() => setPopupTrigger(!popupTrigger)}
				>
					Add Relic
				</button>
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
