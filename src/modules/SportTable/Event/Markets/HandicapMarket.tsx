import { ReactComponent as UpDownIcon } from "assets/icons/up-down-icon.svg"
import cn from "classnames"
import React, { FC, useContext, useState } from "react"
import { Select as HandicapSelect } from "src/components"
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
				<HandicapSelect
					className={styles["handicaps-select"]}
					style={{ visibility: "hidden" }}
				/>
				<FactorValue />
			</div>
		)
	}

	const averageLength = (handicaps1.length + handicaps2.length) / 4

	const [selected, setSelected] = useState<number>(averageLength)

	console.log()

	return (
		<div {...sharedProps}>
			<FactorValue
				onClick={(value: number, type: number) => onClick(value, "handicap1", type)}
			>
				{handicaps1[selected]}
			</FactorValue>
			<HandicapSelect
				className={styles["handicaps-select"]}
				value={selected}
				label={<UpDownIcon />}
				options={handicaps1.map((_handicap, i) => ({
					value: i,
					label: (
						<>
							<FactorValue
								onClick={(value: number, type: number) =>
									onClick(value, "handicap1", type)
								}
							>
								{handicaps1[i]}
							</FactorValue>
							<FactorValue
								onClick={(value: number, type: number) =>
									onClick(value, "handicap2", type)
								}
							>
								{handicaps2[i]}
							</FactorValue>
						</>
					)
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

export default HandicapMarket
