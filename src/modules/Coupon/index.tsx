import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg"
import { ReactComponent as CouponIcon } from "assets/icons/coupon-icon.svg"
import cn from "classnames"
import { Button } from "components/index"
import { observer } from "mobx-react-lite"
import { ComponentProps, FC, useMemo } from "react"
import store from "store/index"
import styles from "./style.module.css"

type Markets = "winsX" | "wins" | "handicaps" | "totals"

interface CouponBetProps {
	event_id: number
	market: Markets
	coefficient: number
	type: string
	value?: number
}

const Coupon: FC = () => {
	if (store.coupon.bets.length === 0) {
		return null
	}

	const handleClearButtonClick = () => {
		store.coupon.clear()
	}

	return (
		<div className={styles["coupon"]}>
			<div className={styles["coupon__header"]}>
				<CouponIcon />
				<h5>Новое пари</h5>
			</div>
			<div className={styles["coupon__bets"]}>
				<div className={styles["coupon__bets-header"]}>
					<ClearButton onClick={handleClearButtonClick} />
					<span>Новое пари</span>
				</div>
				<div className={styles["coupon__bets-list"]}>
					<div>
						<span>Событие</span>
					</div>
					{store.coupon.bets.map(bet => (
						<CouponBet
							key={`${bet.event_id}-${bet.market}-${bet.coefficient}-${bet.type}-${bet.value}`}
							event_id={bet.event_id}
							market={bet.market}
							coefficient={bet.coefficient}
							type={bet.type}
							value={bet.value}
						/>
					))}
				</div>
				<div className={styles["coupon__bets-footer"]}>
					<Button disabled>Заключить пари</Button>
				</div>
			</div>
		</div>
	)
}

const CouponBet: FC<CouponBetProps> = props => {
	const { event_id, coefficient, type, value, market } = props
	const event = store.football.events.find(event => event.id === event_id)!

	const handleClearButtonClick = () => {
		store.coupon.remove(props)
	}

	const markets = {
		totals: "Тотал",
		handicaps: "Фора",
		wins: "Исход",
		winsX: "Двойной исход"
	}

	const outcome = useMemo(() => {
		switch (market) {
			case "wins": {
				if (type === "1") return "Поб. 1"
				if (type === "2") return "Поб. 2"
				return "Ничья"
			}
			case "totals": {
				const t = type === "over" ? "<" : ">"
				return `${t} ${value}`
			}
			case "handicaps": {
				const t = type === "handicap1" ? 1 : 2
				return `${t} (${value})`
			}
			case "winsX": {
				if (type === "1") return "1X"
				if (type === "2") return "X2"
				return "12"
			}
		}
	}, [market, type, value])

	return (
		<div className={styles["coupon-bet"]}>
			<div>
				<ClearButton onClick={handleClearButtonClick} />
			</div>
			<div className={styles["coupon-bet__bet-info"]}>
				<div className={styles["coupon-bet__event_name"]}>
					<span>{event.team1_rus || event.team1}</span>
					<span> — </span>
					<span>{event.team2_rus || event.team2}</span>
				</div>
				<div>Маркет: {markets[market]}</div>
				<div>Исход: {outcome}</div>
				<div>Коэффициент: {coefficient}</div>
			</div>
		</div>
	)
}

const ClearButton: FC<ComponentProps<typeof Button>> = ({ className, ...rest }) => {
	return (
		<Button
			className={cn(className, styles["coupon__crear-button"])}
			{...rest}
		>
			<CloseIcon />
		</Button>
	)
}

export default observer(Coupon)
