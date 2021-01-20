import React, { useEffect, useState } from "react"
import PeopleListItem from "../components/PeopleListItem"

export default function PeopleListPage() {
	const [peopleList, setPeopleList] = useState(null)

	function getPeopleList() {
		const url = "https://swapi.dev/api/people/"
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPeopleList(data.results))
	}
	useEffect(() => {
		getPeopleList()
	}, [])
	return (
		<div>
			PeopleListPage
			{peopleList &&
				peopleList.map((person) => {
					const id = person.url
						.replace("http://swapi.dev/api/people/", "")
						.replace("/", "")
					//Med replace-metoden kan vi få fram siffran som finns i slutet av url:en för varje peopleitem, så vi kan använda den siffran som id. (Just detta api:et saknar tyvärr id så vi behöver använda oss av url:en för att få tag på det)
					return (
						<PeopleListItem person={person} id={id} />
						// <p key={id}>
						// 	{person.name} - {id}
						// </p>
					)
				})}
		</div>
	)
}
