import ClockIcon from "assets/images/clock-icon.svg"
import FavoriteIcon from "assets/images/favorite-icon.svg"
import { FC } from "react"
import { Link } from "react-router-dom"
import "./style.css"

interface IBasicEventData {
	url: string
	team1: {
		name: string
		score: number
	}
	team2: {
		name: string
		score: number
	}
	win1: TValue
	winX: TValue
	win2: TValue
	total: TTotal
}

interface ILiveEventData extends IBasicEventData {
	isLive: true
	time: string
	date?: never
}

interface ILineEventData extends IBasicEventData {
	isLive: false
	date: string
	time?: never
}

interface IEventProps {
	mode?: "default" | "compact"
	data: ILiveEventData | ILineEventData
}

const Event: FC<IEventProps> = ({
	mode = "default",
	data: { isLive, url, team1, team2, time, date, win1, winX, win2, total }
}) => {
	return (
		<div className={`sport-event sport-event--${mode}`}>
			<div className="sport-event__favorite-icon">
				<img src={FavoriteIcon} />
			</div>
			<div className="sport-event__main">
				<Link
					to={url}
					className="sport-event__main-name"
				>
					<span className="sport-event__name-team1">{team1.name}</span>
					<span> - </span>
					<span className="sport-event__name-team2">{team2.name}</span>
				</Link>
				{isLive && (
					<div className="sport-event__main-time">
						<div className="sport-event__clock-icon">
							<img src={ClockIcon} />
						</div>
						<p className="sport-event__time">{time}</p>
					</div>
				)}
				{isLive ? (
					<div className="sport-event__main-score">
						<span className="sport-event__score-team1">{team1.score}</span>
						<span>:</span>
						<span className="sport-event__score-team2">{team2.score}</span>
					</div>
				) : (
					<div className="sport-event__main-date">{date}</div>
				)}
			</div>
			<div className="sport-event__markets">
				<div className="sport-event__value sport-event__value--win-1">{win1.v}</div>
				<div className="sport-event__value sport-event__value--win-X">{winX.v}</div>
				<div className="sport-event__value sport-event__value--win-2">{win2.v}</div>
				<div className="sport-event__total">{total.type}</div>
				<div className="sport-event__value sport-event__total-over">{total.over.v}</div>
				<div className="sport-event__value sport-event__total-under">{total.under.v}</div>
			</div>
		</div>
	)
}

export default Event
