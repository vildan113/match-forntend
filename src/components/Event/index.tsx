import ClockIcon from "assets/images/clock-icon.svg"
import FavoriteIcon from "assets/images/favorite-icon.svg"
import { FC } from "react"
import { Link } from "react-router-dom"
import "./style.css"

interface IEventProps {
	mode?: "default" | "compact"
	data: ILiveEvent | ILineEvent
}

interface IValueProps extends React.ComponentProps<"div"> {
	value: number | null | undefined
}

const Event: FC<IEventProps> = ({
	mode = "default",
	data: { isLive, url, team1, team2, time, date_start, markets }
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
					<div className="sport-event__main-date">{date_start}</div>
				)}
			</div>
			<div className="sport-event__markets">
				<Value
					className="sport-event__value sport-event__value--win-1"
					value={markets.win1}
				/>
				<Value
					className="sport-event__value sport-event__value--win-X"
					value={markets.winX}
				/>
				<Value
					className="sport-event__value sport-event__value--win-2"
					value={markets.win2}
				/>
				<Value
					className="sport-event__total"
					value={markets.total?.type}
				/>
				<Value
					className="sport-event__value sport-event__value--total-over"
					value={markets.total?.over}
				/>
				<Value
					className="sport-event__value sport-event__value--total-under"
					value={markets.total?.under}
				/>
			</div>
		</div>
	)
}
const Value: FC<IValueProps> = ({ value, ...rest }) => {
	if (value == null)
		return (
			<div
				{...rest}
				style={{ cursor: "default" }}
			>
				-
			</div>
		)
	return <div {...rest}>{value}</div>
}

export default Event
