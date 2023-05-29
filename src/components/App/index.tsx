import xBet from "@betting-api/1xbet"
import { injectStores } from "@mobx-devtools/tools"
import Header from "components/Header"
import config from "config/index"
import "normalize.css"
import Home from "pages/Home"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import store from "store/index"
import "./style.css"

injectStores({ store })

xBet.registerApp({
	secret_key: config.xBet.token
})

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
