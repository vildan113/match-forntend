import { Bet, HandicapBet } from "@betting-api/1xbet/typings/bet"
import cn from "classnames"
import { FC } from "react"
import styles from "./style.module.css"

interface IFactorValueProps extends Omit<React.ComponentProps<"div">, "children"> {
	children?: Bet | HandicapBet
}

const FactorValue: FC<IFactorValueProps> = ({ children, ...rest }) => {
	const classNames = [rest.className, styles["factor-value"]]

	if (!children)
		return (
			<div
				{...rest}
				className={cn(...classNames, styles["factor-value--empty"])}
			>
				-
			</div>
		)

	if ("type" in children)
		return (
			<div
				{...rest}
				className={cn(...classNames, styles["factor-value--composite"])}
			>
				<span>{children.type}</span>
				<span>{children.v}</span>
			</div>
		)

	return (
		<div
			{...rest}
			className={cn(...classNames)}
		>
			{children.v}
		</div>
	)
}

export default FactorValue
