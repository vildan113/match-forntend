import { ReactComponent as DownIcon } from "assets/icons/chevron-down.svg"
import cn from "classnames"
import { CountryIcon } from "components/index"
import { FC, useContext, useState } from "react"
import { ILeague } from "store/football"
import { SportTableContext } from ".."
import Event from "../Event"
import Market from "./Market"
import styles from "./style.module.css"

interface ILeagueProps extends React.ComponentProps<"div"> {
	data: ILeague
}

const League: FC<ILeagueProps> = ({
	data: { country, name, name_rus, events },
	className,
	...rest
}) => {
	const { mode, selectedMarkets } = useContext(SportTableContext)

	const [isCollapse, setIsCollapse] = useState(false)

	const handleToggle = () => {
		setIsCollapse(prev => !prev)
	}

	return (
		<div
			className={cn(
				className,
				styles["sport-table-league"],
				styles[`sport-table-league--${mode}`],
				{
					[styles["sport-table-league--collapsed"]]: isCollapse
				}
			)}
			{...rest}
		>
			<div
				className={styles["sport-table-league__header"]}
				onClick={handleToggle}
			>
				<CountryIcon
					country={country}
					className={styles["sport-table-league__header-country-icon"]}
				/>
				<div className={styles["sport-table-league__header-caption"]}>
					{name_rus || name}
				</div>
				<div className={styles["sport-table-league__header-markets"]}>
					{selectedMarkets.map(market => (
						<Market
							key={market}
							market={market}
						/>
					))}
				</div>
				<DownIcon className={styles["sport-table-league__down-icon"]} />
			</div>
			{!isCollapse && (
				<div className={styles["sport-table-league__content"]}>
					{events.map(event => (
						<Event
							key={event.id}
							data={event}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default League
