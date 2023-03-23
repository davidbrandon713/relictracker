import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import RelicPageItem from '../relicpage-drop/relicpage-drop'
import CalcContainerItem from '../calc-container-item/calc-container-item'

import './relicpage.css'

const RelicPage = (props) => {
	const initialState = [0, 0, 0, 0, 0, 0]
	const [sessionDrops, setSessionDrops] = useState(initialState)
	const [editMode, setEditMode] = useState(false)
	const [streak, setStreak] = useState(0)
	const [bestStreak, setBestStreak] = useState(0)
	const [draggablePos, setDraggablePos] = useState()
	const { relic, inventory, saveInventory, trigger, setTrigger } = props

	const totalDropCount = inventory.data
		? inventory.data.reduce((sum, num) => (sum += num)) +
		  sessionDrops.reduce((sum, num) => (sum += num))
		: 0

	useEffect(() => {
		newSession()
	}, [relic])

	const eventLogger = (e, data) => {
		// console.log('Event: ', e);
		// console.log('Data: ', data);
		setDraggablePos({ x: data.lastX, y: data.lastY })
	}

	const calcPercent = (drop) => {
		return drop !== 0 ? ((drop / totalDropCount) * 100).toFixed(2) : 0
	}

	const addDrop = (i) => {
		const updatedDrops = [...sessionDrops]
		updatedDrops[i] += 1
		setSessionDrops(updatedDrops)
		if (!editMode) {
			if (i === 0) {
				setStreak(streak + 1)
			} else {
				if (streak > bestStreak) {
					setBestStreak(streak)
				}
				setStreak(0)
			}
		}
	}

	const rmvDrop = (i) => {
		if (editMode || sessionDrops[i] > 0) {
			const updatedDrops = [...sessionDrops]
			updatedDrops[i] -= 1
			setSessionDrops(updatedDrops)
			if (i === 0 && !editMode) {
				setStreak(streak - 1)
			}
		}
	}

	const saveSession = () => {
		if (!sessionDrops.every((item) => item === 0)) {
			saveInventory(relic, sessionDrops, bestStreak)
			console.log(`Saved ${relic.name} data`)
			newSession()
		}
	}

	const saveAndClose = () => {
		if (!sessionDrops.every((item) => item === 0)) {
			if (window.confirm('Save session?')) {
				saveSession()
				setEditMode(false)
				setTrigger(false)
			}
		} else {
			setEditMode(false)
			setTrigger(false)
		}
	}

	const newSession = () => {
		if (!sessionDrops.every((item) => item === 0)) {
			setSessionDrops(initialState)
			setStreak(0)
			setBestStreak(0)
			console.log(
				`Cleared session for ${relic.name} => [${sessionDrops}] => [${bestStreak}]`
			)
		}
	}

	const toggleEditMode = () => {
		setEditMode((prevState) => !prevState)
	}

	return (
		trigger && (
			<Draggable
				bounds="html"
				handle=".dragBar"
				defaultPosition={draggablePos}
				onStop={eventLogger}
			>
				<div
					className="window"
          id="relicPageWindow"
					style={{
						top: window.innerHeight / 2 - 278,
						right: window.innerWidth / 2 - 190,
					}}
				>
					<div className="windowInner">
						<div className="dragBar">
							<h1 className="relicTitle">{relic.name} Relic</h1>
						</div>
						<button
							className="closeBtn"
							onClick={saveAndClose}
						>
							Close
						</button>

						<div className="topContainer">
							<RelicPageItem
								relic={relic}
								className="dropRare"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={0}
							/>
							<RelicPageItem
								relic={relic}
								className="dropUncommon"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={1}
							/>
							<RelicPageItem
								relic={relic}
								className="dropUncommon"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={2}
							/>
							<RelicPageItem
								relic={relic}
								className="dropCommon"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={3}
							/>
							<RelicPageItem
								relic={relic}
								className="dropCommon"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={4}
							/>
							<RelicPageItem
								relic={relic}
								className="dropCommon"
								rmvDrop={rmvDrop}
								addDrop={addDrop}
								i={5}
							/>
						</div>

						<div className="midContainer">
							<div>
								<button onClick={saveSession}>Save</button>
								<button
									onClick={toggleEditMode}
									style={{
										border: editMode && '1px solid red',
										color: editMode && 'red',
									}}
								>
									Edit
								</button>
								<button onClick={newSession}>Revert</button>
							</div>
							<div>
								<h5>Session</h5>
								<h5>Total</h5>
								<h5>Percent</h5>
							</div>
						</div>

						<div className="botContainer">
							<div className="dropWindow">
								{relic.drops &&
									relic.drops.map((drop, index) => (
										<span key={`${drop}-${index}-drop`}>{drop}</span>
									))}
							</div>
							<div className="dataWindow">
								<div>
									{sessionDrops.map((data, index) => (
										<span key={`${inventory.id}-${index}-session`}>{data}</span>
									))}
								</div>
								<div>
									{inventory.data &&
										inventory.data.map((item, index) => (
											<span key={`${inventory.id}-${index}-total`}>
												{item + sessionDrops[index]}
											</span>
										))}
								</div>
								<div>
									{inventory.data &&
										inventory.data.map((item, index) => (
											<span key={`${inventory.id}-${index}-percent`}>
												{calcPercent(item + sessionDrops[index])}%
											</span>
										))}
								</div>
							</div>
						</div>

						<div className="calcContainer">
							<CalcContainerItem
								title={'Total drops'}
								value={totalDropCount}
							/>
							<CalcContainerItem
								title={'All time'}
								value={inventory.best ? inventory.best : 0}
							/>
							<CalcContainerItem
								title={'Session'}
								value={bestStreak}
							/>
							<CalcContainerItem
								title={'Current'}
								value={streak}
							/>
						</div>
					</div>
				</div>
			</Draggable>
		)
	)
}

export default RelicPage
