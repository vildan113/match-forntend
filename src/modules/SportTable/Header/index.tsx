import { ReactComponent as DownIcon } from "assets/icons/chevron-down.svg"
import cn from "classnames"
import { Select } from "components/index"
import { FC, cloneElement, useContext } from "react"
import { SportTableContext } from ".."
import { Markets } from "../types"
import styles from "./style.module.css"

interface IHeaderProps extends React.ComponentProps<"div"> {
	collapsed: boolean
	icon: React.ReactElement
	caption: string
}

const Header: FC<IHeaderProps> = ({
	collapsed,
	icon,
	caption,
	className,
	children,
	onClick,
	...rest
}) => {
	const { mode, markets, selectedMarkets, setState } = useContext(SportTableContext)

	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.target
		if (target instanceof HTMLElement)
			if (target.closest("button") || target.closest("ul")) return

		onClick?.(event)
	}

	const handleChangeMarkets = (index: number, value: Markets) => {
		const cur = [...selectedMarkets]
		const prevIndex = selectedMarkets.indexOf(value)

		if (prevIndex === -1) {
			cur[index] = value
			return cur
		}

		cur[prevIndex] = cur[index]
		cur[index] = value

		setState(state => {
			return { ...state, selectedMarkets: cur }
		})
	}

	return (
		<div
			className={cn(
				className,
				styles["sport-table-header"],
				styles[`sport-table-header--${mode}`],
				{
					[styles["sport-table-header--collapsed"]]: collapsed
				}
			)}
			onClick={handleClick}
			{...rest}
		>
			{cloneElement(icon, {
				className: cn(icon.props.className, styles["sport-table-header__sport-icon"])
			})}
			<div className={styles["sport-table-header__caption"]}>{caption}</div>
			<div
				className={cn(
					styles["sport-table-header__markets"],
					styles["sport-table-header__markets-selector"],
					styles[`sport-table-header__markets-selector--${mode}`]
				)}
			>
				{markets.map((market, index) => (
					<Select
						key={market.value}
						className={cn(
							styles["sport-table-header__select"],
							styles[`sport-table-header__select--${selectedMarkets[index]}`]
						)}
						value={selectedMarkets[index]}
						options={markets}
						onChange={value => handleChangeMarkets(index, value as Markets)}
					/>
				))}
			</div>
			<DownIcon className={styles["sport-table-header__down-icon"]} />
		</div>
	)
}

export default Header
