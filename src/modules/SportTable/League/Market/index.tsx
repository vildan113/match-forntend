import cn from "classnames"
import { FC, useContext } from "react"
import { Markets, SportTableContext } from "../.."
import styles from "./style.module.css"

interface IMarketsProps extends React.ComponentProps<"div"> {
	market: Markets
}

const values = {
	winsX: ["1X", "12", "X2"],
	handicaps: ["Фора 1", "Фора 2"],
	totals: ["Тотал", "Б", "М"],
	wins: ["1", "X", "2"]
}

const Market: FC<IMarketsProps> = ({ market, className, ...rest }) => {
	const { mode } = useContext(SportTableContext)

	return (
		<div
			{...rest}
			className={cn(
				className,
				styles["market"],
				styles[`market--${mode}`],
				styles[`market--${market}`]
			)}
		>
			{(values[market] || values.wins).map(value => (
				<div
					key={value}
					className={styles["market__value"]}
				>
					{value}
				</div>
			))}
		</div>
	)
}

export default Market
