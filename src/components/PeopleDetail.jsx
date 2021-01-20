import React from "react"

export default function PeopleDetail({ person }) {
	function renderAttribute(attr, label) {
		return (
			<p>
				{label}: {person[attr]}
			</p>
		)
	}
	return (
		<div>
			<h1>{person.name}</h1>
			{renderAttribute("birth_year", "Birth Year")}
			{renderAttribute("eye_color", "Eye Color")}
			{renderAttribute("gender", "Gender")}
			{renderAttribute("hair_color", "Hair Color")}
			{renderAttribute("height", "Height [cm]")}
			{renderAttribute("mass", "Weight [kg]")}
		</div>
	)
}
