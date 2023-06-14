import cn from "classnames"
import { FC, createContext, useEffect, useState } from "react"
import Header from "./Header"
import League from "./League"
import styles from "./style.module.css"
import {
	IBetData,
	IEvent,
	IHandicapBetData,
	ILeague,
	ISport,
	ITotalBetData,
	Markets
} from "./types"

export interface ISportTableState {
	mode: "default" | "compact"
	markets: { value: Markets; label: string }[]
	selectedMarkets: Markets[]
	onBet: (bet: IBetData | IHandicapBetData | ITotalBetData) => void
}

export interface ISportTableContext extends ISportTableState {
	setState: React.Dispatch<React.SetStateAction<ISportTableState>>
}

export type SportTableProps = React.ComponentProps<"div"> &
	ISportTableState & {
		sport: ISport
		data: (ILeague & { events: IEvent[] })[]
	}

//@ts-ignore
export const SportTableContext = createContext<ISportTableContext>()

const SportTable: FC<SportTableProps> = ({
	data,
	mode,
	sport,
	markets,
	selectedMarkets,
	onBet,
	className,
	children,
	...rest
}) => {
	const [state, setState] = useState<ISportTableState>({
		mode,
		markets,
		selectedMarkets: selectedMarkets || markets.map(m => m.value),
		onBet
	})

	const [isCollapse, setIsCollapse] = useState(false)

	const handleToggle = () => {
		setIsCollapse(prev => !prev)
	}

	useEffect(() => {
		setState(prev => ({
			...prev,
			mode,
			markets,
			selectedMarkets: selectedMarkets || markets.map(m => m.value)
		}))
	}, [mode, markets, selectedMarkets])

	return (
		<SportTableContext.Provider value={{ ...state, setState }}>
			<div
				className={cn(className, styles["sport-table"])}
				{...rest}
			>
				<Header
					className={styles["sport-table__header"]}
					collapsed={isCollapse}
					icon={sport.icon}
					caption={sport.name}
					onClick={handleToggle}
				/>
				{!isCollapse && (
					<div className={styles["sport-table__content"]}>
						{data.map(league => (
							<League
								key={league.league_id}
								data={league}
								events={league.events}
							/>
						))}
					</div>
				)}
			</div>
		</SportTableContext.Provider>
	)
}

export default SportTable
