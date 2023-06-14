import cn from "classnames"
import { FC, useEffect, useState } from "react"
import styles from "./style.module.css"

interface Bet {
	v: number
}

interface HandicapBet extends Bet {
	type: number
}

type BaseFactorValueProps = Omit<React.ComponentProps<"div">, "children" | "onClick">

interface IFactorValueBProps extends BaseFactorValueProps {
	children?: Bet
	onClick?: (value: number) => void
}

interface IFactorValueHBProps extends BaseFactorValueProps {
	children?: HandicapBet
	onClick?: (value: number, type: number) => void
}

const FactorValue: FC<IFactorValueBProps | IFactorValueHBProps> = ({
	onClick = () => {},
	children,
	...rest
}) => {
	const [isHighlighted, setIsHighlighted] = useState(false)
	const [shouldHighlight, setShouldHighlight] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			const shouldHighlight = Math.random() < 0.5
			setShouldHighlight(shouldHighlight)

			if (shouldHighlight) {
				const isHighlighted = Math.random() < 0.5
				setIsHighlighted(isHighlighted)
			}
		}, 10000)

		return () => clearInterval(interval)
	}, [])

	const classNames = [
		rest.className,
		styles["factor-value"],
		children &&
			shouldHighlight &&
			(isHighlighted ? styles["factor-value--green"] : styles["factor-value--red"])
	]

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
				onClick={() => onClick(children.v, children.type)}
			>
				<span>{children.type}</span>
				<span>{children.v}</span>
			</div>
		)

	return (
		<div
			{...rest}
			className={cn(...classNames)}
			onClick={() => (onClick as (value: number) => void)(children.v)}
		>
			{children.v}
		</div>
	)
}

export default FactorValue
