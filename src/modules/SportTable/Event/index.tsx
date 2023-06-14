import { ReactComponent as ClockIcon } from "assets/icons/clock-icon.svg"
import { ReactComponent as FavoriteIcon } from "assets/icons/favorite-icon.svg"
import cn from "classnames"
import moment from "moment"
import { FC, useContext, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { SportTableContext } from ".."
import { IEvent } from "../types"
import { HandicapMarket, Market, TotalMarket } from "./Markets"
import styles from "./style.module.css"

interface IEventProps {
	data: IEvent
}

const Event: FC<IEventProps> = ({
	data: { isLive, team1, team2, team1_rus, team2_rus, score1, score2, markets, ...data }
}) => {
	const { mode, selectedMarkets, onBet } = useContext(SportTableContext)

	const [minute, setMinute] = useState(data.minute)
	const [seconds, setSeconds] = useState(data.seconds)

	const date_start = useMemo(() => {
		const date = moment(data.date_start)

		const today = moment().endOf("day")
		const tomorrow = moment().add(1, "day").endOf("day")

		if (date <= today) return date.format("[Сегодня в] H:mm")
		if (date <= tomorrow) return date.format("[Завтра в] H:mm")

		return date.format("DD MMMM [в] H:mm")
	}, [data.date_start])

	const time = moment((seconds + minute * 60) * 1000).format("m:ss")

	const incrementSeconds = () => {
		setSeconds(prev => {
			if (prev === 59) {
				setMinute(prev => prev + 1)
				return 0
			}

			return prev + 1
		})
	}

	useEffect(() => {
		const interval = setInterval(() => {
			incrementSeconds()
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={cn(styles["sport-table-event"], styles[`sport-table-event--${mode}`])}>
			<FavoriteIcon className={styles["sport-table-event__favorite-icon"]} />
			<div className={styles["sport-table-event__main"]}>
				<Link
					to="#"
					className={styles["sport-table-event__main-name"]}
				>
					<span className={styles["sport-table-event__name-team1"]}>
						{team1_rus || team1}
					</span>
					<span> — </span>
					<span className={styles["sport-table-event__name-team2"]}>
						{team2_rus || team2}
					</span>
				</Link>
				{isLive && (
					<div className={styles["sport-table-event__main-time"]}>
						<ClockIcon className={styles["sport-table-event__clock-icon"]} />
						<p className={styles["sport-table-event__time"]}>{time}</p>
					</div>
				)}
				{isLive ? (
					<div className={styles["sport-table-event__main-score"]}>
						<span className={styles["sport-table-event__score-team1"]}>{score1}</span>
						<span>:</span>
						<span className={styles["sport-table-event__score-team2"]}>{score2}</span>
					</div>
				) : (
					<div className={styles["sport-table-event__main-date"]}>{date_start}</div>
				)}
			</div>
			<div className={styles["sport-table-event__markets"]}>
				{selectedMarkets.map(market => {
					switch (market) {
						case "wins":
							return (
								<Market
									key={market}
									values={[markets.win1, markets.winX, markets.win2]}
									onClick={(coefficient, type) =>
										onBet({ event_id: data.id, market, type, coefficient })
									}
								/>
							)
						case "winsX":
							return (
								<Market
									key={market}
									values={[markets.win1X, markets.win12, markets.winX2]}
									onClick={(coefficient, type) =>
										onBet({ event_id: data.id, market, type, coefficient })
									}
								/>
							)
						case "handicaps":
							return (
								<HandicapMarket
									key={market}
									handicaps1={markets.handicaps1}
									handicaps2={markets.handicaps2}
									onClick={(coefficient, type, value) =>
										onBet({
											event_id: data.id,
											market,
											type,
											coefficient,
											value
										})
									}
								/>
							)
						case "totals":
							return (
								<TotalMarket
									key={market}
									totals={markets.totals}
									onClick={(coefficient, type, value) =>
										onBet({
											event_id: data.id,
											market,
											type,
											coefficient,
											value
										})
									}
								/>
							)
					}
				})}
			</div>
		</div>
	)
}

export default Event
