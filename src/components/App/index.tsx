import Home from "pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"

const App: FC = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
		</Routes>
	)
}

export default App
