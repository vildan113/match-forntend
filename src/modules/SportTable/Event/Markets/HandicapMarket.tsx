import { HandicapBet } from "@betting-api/1xbet/typings/bet"
import { ReactComponent as UpDownIcon } from "assets/icons/up-down-icon.svg"
import cn from "classnames"
import React, { FC, useContext, useState } from "react"
import { Select } from "src/components"
import { isEmptyArray } from "src/utils"
import { SportTableContext } from "../.."
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface IHandicapMarketProps extends React.ComponentProps<"div"> {
	handicaps1: HandicapBet[]
	handicaps2: HandicapBet[]
}

const HandicapMarket: FC<IHandicapMarketProps> = ({
	handicaps1,
	handicaps2,
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
			styles["market--handicaps"],
			styles[`market--${mode}`]
		)
	}

	if (isEmptyArray(handicaps1) || isEmptyArray(handicaps2)) {
		return (
			<div {...sharedProps}>
				<FactorValue />
				<FactorValue />
			</div>
		)
	}

	const averageLength = (handicaps1.length + handicaps2.length) / 4

	const [selected, setSelected] = useState<number>(averageLength)

	return (
		<div {...sharedProps}>
			<FactorValue>{handicaps1[selected]}</FactorValue>
			<HandicapSelect
				value={selected}
				options={handicaps1.map((handicap, i) => ({
					value: i,
					label: handicap.v
				}))}
				onChange={setSelected}
			/>
			<FactorValue>{handicaps2[selected]}</FactorValue>
		</div>
	)
}

const HandicapSelect: FC<React.ComponentProps<typeof Select<number>>> = props => {
	return (
		<Select
			{...props}
			className={styles["handicaps-select"]}
			label={<UpDownIcon />}
		/>
	)
}

export default HandicapMarket
