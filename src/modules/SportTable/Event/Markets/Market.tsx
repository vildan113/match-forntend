import cn from "classnames"
import { FC, useContext } from "react"
import { SportTableContext } from "../.."
import { Bet } from "../../types"
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface IMarketProps extends Omit<React.ComponentProps<"div">, "onClick"> {
	values: [Bet | undefined, Bet | undefined, Bet | undefined]
	onClick?: (coefficient: number, type: "1" | "2" | "X") => void
}

const Market: FC<IMarketProps> = ({ values, onClick = () => {}, className, ...rest }) => {
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
			<FactorValue onClick={(value: number) => onClick(value, "1")}>{values[0]}</FactorValue>
			<FactorValue onClick={(value: number) => onClick(value, "X")}>{values[1]}</FactorValue>
			<FactorValue onClick={(value: number) => onClick(value, "2")}>{values[2]}</FactorValue>
		</div>
	)
}

export default Market
