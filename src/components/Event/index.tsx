import ClockIcon from "assets/images/clock-icon.svg"
import FavoriteIcon from "assets/images/favorite-icon.svg"
import { FC } from "react"
import { Link } from "react-router-dom"
import "./style.css"

interface IEventBasicProps {
	mode?: "default" | "compact"
	url: string
	title: string
	win1: TValue
	winX: TValue
	win2: TValue
	total: TTotal
}

interface ILiveEventProps extends IEventBasicProps {
	isLive: true
	time: string
	score: string
	date?: never
}

interface ILineEventProps extends IEventBasicProps {
	isLive: false
	date: string
	time?: never
	score?: never
}

type TEventProps = ILiveEventProps | ILineEventProps

const Event: FC<TEventProps> = ({
	mode = "default",
	isLive,
	url,
	title,
	time,
	score,
	date,
	win1,
	winX,
	win2,
	total
}) => {
	return (
		<div className={`sport-event sport-event--${mode}`}>
			<div className="sport-event__favorite-icon">
				<img src={FavoriteIcon} />
			</div>
			<div className="sport-event__main">
				<div className="sport-event__main-left">
					<Link
						to={url}
						className="sport-event__name"
					>
						{title}
					</Link>
				</div>
				<div className="sport-event__main-right">
					{isLive ? (
						<>
							<div className="sport-event__clock-icon">
								<img src={ClockIcon} />
							</div>
							<span className="sport-event__time">{time}</span>
							<span className="sport-event__score">{score}</span>
						</>
					) : (
						<span className="sport-event__planned-time">{date}</span>
					)}
				</div>
			</div>
			<div className="sport-event__value">{win1.v}</div>
			<div className="sport-event__value">{winX.v}</div>
			<div className="sport-event__value">{win2.v}</div>
			<div className="sport-event__total">{total.type}</div>
			<div className="sport-event__value">{total.over.v}</div>
			<div className="sport-event__value">{total.under.v}</div>
		</div>
	)
}

export default Event
