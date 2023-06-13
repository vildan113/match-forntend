import { ReactComponent as UpDownIcon } from "assets/icons/up-down-icon.svg"
import cn from "classnames"
import React, { FC, useContext, useState } from "react"
import { Select } from "src/components"
import { isEmptyArray } from "src/utils"
import { SportTableContext } from "../.."
import { HandicapBet } from "../../types"
import FactorValue from "./FactorValue"
import styles from "./style.module.css"

interface IHandicapMarketProps extends Omit<React.ComponentProps<"div">, "onClick"> {
	handicaps1: HandicapBet[]
	handicaps2: HandicapBet[]
	onClick?: (coefficient: number, type: "handicap1" | "handicap2", value: number) => void
}

const HandicapMarket: FC<IHandicapMarketProps> = ({
	handicaps1,
	handicaps2,
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
			styles["market--handicaps"],
			styles[`market--${mode}`]
		)
	}

	if (isEmptyArray(handicaps1) || isEmptyArray(handicaps2)) {
		return (
			<div {...sharedProps}>
				<FactorValue />
				<HandicapSelect style={{ visibility: "hidden" }} />
				<FactorValue />
			</div>
		)
	}

	const averageLength = (handicaps1.length + handicaps2.length) / 4

	const [selected, setSelected] = useState<number>(averageLength)

	return (
		<div {...sharedProps}>
			<FactorValue
				onClick={(value: number, type: number) => onClick(value, "handicap1", type)}
			>
				{handicaps1[selected]}
			</FactorValue>
			<HandicapSelect
				value={selected}
				options={handicaps1.map((handicap, i) => ({
					value: i,
					label: handicap.v
				}))}
				onChange={setSelected}
			/>
			<FactorValue
				onClick={(value: number, type: number) => onClick(value, "handicap2", type)}
			>
				{handicaps2[selected]}
			</FactorValue>
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
