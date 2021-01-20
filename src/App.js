import React from "react"
import { Switch, Route } from "react-router-dom"
import PeopleDetailPage from "./pages/PeopleDetailPage"
import PeopleListPage from "./pages/PeopleListPage"

function App() {
	return (
		<div>
			<Switch>
				<Route path="/people/:id" component={PeopleDetailPage} />
				<Route path="/people" component={PeopleListPage} />
			</Switch>
		</div>
	)
}

export default App
