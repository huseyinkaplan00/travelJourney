import React from "react"
import Header from "./components/Header.jsx"
import Cards from "./components/Cards.jsx"
import data from "./data.jsx"
const App = () => {
	const card = data.map((item) => {
		return (
			<Cards
				{...item}
				key={item.id}
			/>
		)
	})

	return (
		<div className="container">
			<header>
				<Header />
			</header>
			<main>{card}</main>
		</div>
	)
}

export default App
