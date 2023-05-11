import "normalize.css"
import { FC, useState } from "react"
import League from "../League"
import "./style.css"

const App: FC = () => {
	const [state, setState] = useState<"default" | "compact">("default")
	return (
		// <Event
		// 	mode="default"
		// 	data={{
		// 		id: 1,
		// 		isLive: true,
		// 		url: "",
		// 		team1: { id: 1, name: "Нидерланды", score: 1 },
		// 		team2: { id: 1, name: "Италия", score: 0 },
		// 		time: "11:11",
		// 		markets: {
		// 			win1: null,
		// 			winX: 1.2,
		// 			win2: 1.2,
		// 			total: { type: 1.5, over: 1.2, under: 1.2 }
		// 		}
		// 	}}
		// />
		<>
			<League
				mode={state}
				data={{
					title: "Лига Европы",
					matches: [
						{
							id: 1,
							isLive: true,
							url: "",
							team1: { id: 1, name: "Нидерланды", score: 1 },
							team2: { id: 1, name: "Италия", score: 0 },
							time: "11:11",
							markets: {
								win1: null,
								winX: 1.2,
								win2: 1.2,
								total: { type: 1.5, over: 1.2, under: 1.2 }
							}
						},
						{
							id: 2,
							isLive: true,
							url: "",
							team1: { id: 1, name: "Нидерланды", score: 1 },
							team2: { id: 1, name: "Италия", score: 0 },
							time: "11:11",
							markets: {
								win1: null,
								winX: 1.2,
								win2: 1.2,
								total: { type: 1.5, over: 1.2, under: 1.2 }
							}
						}
					]
				}}
			/>
			<button onClick={() => setState(state === "default" ? "compact" : "default")}>
				{state}
			</button>
		</>
	)
}

export default App
