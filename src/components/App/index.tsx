import xBet from "@betting-api/1xbet"
import { injectStores } from "@mobx-devtools/tools"
import { Header } from "components/index"
import config from "config/index"
import moment from "moment"
import "moment/dist/locale/ru"
import "normalize.css"
import { Home, Sports } from "pages/index"
import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import store from "store/index"
import "./style.css"

moment.locale("ru")

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
				<Route
					path="/sports"
					element={<Sports live={false} />}
				/>
				<Route
					path="/live"
					element={<Sports live={true} />}
				/>
				<Route
					path="/"
					element={
						<Navigate
							to="/home"
							replace
						/>
					}
				/>
				<Route
					path="*"
					element={<div>404 Not Found</div>}
				/>
			</Routes>
		</>
	)
}

export default App
