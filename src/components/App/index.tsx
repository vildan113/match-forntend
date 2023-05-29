import { injectStores } from "@mobx-devtools/tools"
import Header from "components/Header"
import "normalize.css"
import Home from "pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import store from "store/index"
import "./style.css"

injectStores({ store })

const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/home"
					element={<Home />}
				/>
			</Routes>
		</>
	)
}

export default App
