import { TotalBet } from "@betting-api/1xbet/typings/bet"
import { ReactComponent as UpDownIcon } from "assets/icons/up-down-icon.svg"
import cn from "classnames"
import React, { FC, useContext, useState } from "react"
import { Select } from "src/components"
import { isEmptyArray } from "src/utils"
import { SportTableContext } from "../.."
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface ITotalMarketProps extends React.ComponentProps<"div"> {
	totals: TotalBet[]
}

const TotalMarket: FC<ITotalMarketProps> = ({ totals, className, children, ...rest }) => {
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
				options={totals.map((total, i) => ({
					value: i,
					label: total.over?.v
				}))}
				onChange={setSelected}
			/>
			<FactorValue>{totals[selected].under}</FactorValue>
			<FactorValue>{totals[selected].over}</FactorValue>
		</div>
	)
}

const TotalSelect: FC<React.ComponentProps<typeof Select<number>>> = props => {
	return (
		<Select
			{...props}
			className={styles["totals-select"]}
			label={<UpDownIcon />}
		/>
	)
}

export default TotalMarket
