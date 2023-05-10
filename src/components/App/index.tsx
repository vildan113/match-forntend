import Header from "components/Header"
import "normalize.css"
import Home from "pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import "./style.css"

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</>
	)
}

export default App
