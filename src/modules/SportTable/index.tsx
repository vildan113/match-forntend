import cn from "classnames"
import { FC, createContext, useEffect, useState } from "react"
import { ILeague } from "store/football"
import Header from "./Header"
import League from "./League"
import styles from "./style.module.css"

export type Markets = "wins" | "winsX" | "handicaps" | "totals"

interface ISportTableProps extends React.ComponentProps<"div"> {
	mode: "default" | "compact"
	sport: {
		icon: React.ReactElement
		name: string
	}
	data: ILeague[]
	markets: { value: Markets; label: string }[]
	selectedMarkets?: Markets[]
}

interface IState {
	mode: "default" | "compact"
	markets: { value: Markets; label: string }[]
	selectedMarkets: Markets[]
}

interface ISportTableContext extends IState {
	setState: React.Dispatch<React.SetStateAction<IState>>
}

//@ts-ignore
export const SportTableContext = createContext<ISportTableContext>()

const SportTable: FC<ISportTableProps> = ({
	data,
	mode,
	sport,
	markets,
	selectedMarkets,
	className,
	children,
	...rest
}) => {
	const [state, setState] = useState<IState>({
		mode,
		markets,
		selectedMarkets: selectedMarkets || markets.map(m => m.value)
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
							/>
						))}
					</div>
				)}
			</div>
		</SportTableContext.Provider>
	)
}

export default SportTable
