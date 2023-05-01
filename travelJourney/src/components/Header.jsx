import React from "react"
import logo from "../images/logo.svg"
const Header = () => {
	return (
		<div className="header">
			<img
				src={logo}
				alt="Logo"
			/>
			<h1>my travel journal.</h1>
		</div>
	)
}

export default Header
