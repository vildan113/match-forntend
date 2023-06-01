import { Bet } from "@betting-api/1xbet/typings/bet"
import cn from "classnames"
import { FC, useContext } from "react"
import { SportTableContext } from "../.."
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface IMarketProps extends React.ComponentProps<"div"> {
	values: [Bet | undefined, Bet | undefined, Bet | undefined]
}

const Market: FC<IMarketProps> = ({ values, className, ...rest }) => {
	const { mode } = useContext(SportTableContext)

	return (
		<div
			className={cn(
				className,
				styles["market"],
				styles["market--wins"],
				styles[`market--${mode}`]
			)}
			{...rest}
		>
			<FactorValue>{values[0]}</FactorValue>
			<FactorValue>{values[1]}</FactorValue>
			<FactorValue>{values[2]}</FactorValue>
		</div>
	)
}

export default Market
