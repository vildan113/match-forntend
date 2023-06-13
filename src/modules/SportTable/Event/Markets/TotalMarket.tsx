import { ReactComponent as UpDownIcon } from "assets/icons/up-down-icon.svg"
import cn from "classnames"
import React, { FC, useContext, useState } from "react"
import { Select } from "src/components"
import { isEmptyArray } from "src/utils"
import { SportTableContext } from "../.."
import { TotalBet } from "../../types"
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface ITotalMarketProps extends Omit<React.ComponentProps<"div">, "onClick"> {
	totals: TotalBet[]
	onClick?: (coefficient: number, type: "over" | "under", value: number) => void
}

const TotalMarket: FC<ITotalMarketProps> = ({
	totals,
	onClick = () => {},
	className,
	children,
	...rest
}) => {
	const { mode } = useContext(SportTableContext)

	const sharedProps = {
		...rest,
		className: cn(
			className,
			styles["market"],
			styles["market--totals"],
			styles[`market--${mode}`]
		)
	}

	if (isEmptyArray(totals)) {
		return (
			<div {...sharedProps}>
				<TotalSelect style={{ visibility: "hidden" }} />
				<FactorValue />
				<FactorValue />
			</div>
		)
	}

	const averageLength = totals.length / 2

	const [selected, setSelected] = useState<number>(averageLength)

	return (
		<div {...sharedProps}>
			<TotalSelect
				value={selected}
				label={totals[selected].type}
				options={totals.map((total, i) => ({
					value: i,
					label: total.over?.v
				}))}
				onChange={setSelected}
			/>
			<FactorValue onClick={(value: number) => onClick(value, "over", totals[selected].type)}>
				{totals[selected].under}
			</FactorValue>
			<FactorValue
				onClick={(value: number) => onClick(value, "under", totals[selected].type)}
			>
				{totals[selected].over}
			</FactorValue>
		</div>
	)
}

const TotalSelect: FC<React.ComponentProps<typeof Select<number>>> = props => {
	return (
		<Select
			{...props}
			className={styles["totals-select"]}
			label={
				<>
					<span>{props.label}</span>
					<UpDownIcon />
				</>
			}
		/>
	)
}

export default TotalMarket
