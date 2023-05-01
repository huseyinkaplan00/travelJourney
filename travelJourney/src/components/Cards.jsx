import React from "react"
import locationIcon from "../images/locationIcon.svg"
const Cards = (props) => {
	return (
		<div className="cardContainer">
			<div className="photo">
				<img
					src={props.imageUrl}
					alt={props.title}
				/>
			</div>
			<div className="content">
				<div className="column location">
					<img src={locationIcon}></img>
					<h4>{props.location}</h4>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<div className="column title">
					<h2>{props.title}</h2>
				</div>
				<div className="column time">
					<p>
						<time dateTime={props.dateTimeStart}>{props.startDate}</time>-<time dateTime={props.dateTimeEnd}>{props.endDate}</time>
					</p>
				</div>
				<div className="column description">
					<p>{props.description}</p>d
				</div>
			</div>
		</div>
	)
}

export default Cards
