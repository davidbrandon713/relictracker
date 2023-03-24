import React, { useState } from 'react'
import ErrorBoundry from '../simple/error-boundry'
import RelicPage from '../relicpage/relicpage'
import Card from '../card/card'

import '../card/card.css'

const CardList = (props) => {
	const [selectedRelic, setSelectedRelic] = useState('None')
	const [inventory, setInventory] = useState({
		id: 'mesoN5',
		data: [0, 0, 0, 0, 0, 0],
	})
	const [popupTrigger, setPopupTrigger] = useState(false)
	const { userid, relics, serverIP } = props

	const setRelic = async (relic) => {
		if (selectedRelic === relic) return setPopupTrigger(true)
		// Retrieve user data for this relic
		const onGetRelicInventory = async (relic) => {
			await fetch(`http://${serverIP}:3001/users/${userid}/${relic.id}`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => setInventory(data))
				.then(setSelectedRelic(relic))
				.then(setPopupTrigger(true))
				.then(console.log(`Fetch ${relic.name} data`))
		}
		await onGetRelicInventory(relic)
	}

	// Save session drops to user document
	const saveInventory = async (relic, sessionDrops, bestStreak) => {
		await fetch(`http://${serverIP}:3001/users/${userid}/update/${relic.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ sessionDrops, bestStreak }),
		})
			.then((response) => response.json())
			.then((data) => setInventory(data))
			.then(console.log(`Saved ${relic.name} data`))
	}

	return (
		<>
			<ErrorBoundry>
				{relics.length ? (
					<div className="cardlist-container">
						{relics.map((relic) => {
							return (
								<Card
									key={relic.name}
									name={relic.name}
									drops={relic.drops}
									clickEvent={() => setRelic(relic)}
								/>
							)
						})}
					</div>
				) : (
					<>
						<h3 className="error">No relics match search criteria</h3>
					</>
				)}
			</ErrorBoundry>
			<ErrorBoundry>
				<RelicPage
					relic={selectedRelic}
					inventory={inventory}
					saveInventory={saveInventory}
					trigger={popupTrigger}
					setTrigger={setPopupTrigger}
				/>
			</ErrorBoundry>
		</>
	)
}

export default CardList
