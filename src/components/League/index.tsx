import Event from "components/Event"
import { FC } from "react"
import "./style.css"

interface ILeagueProps {
	mode?: "default" | "compact"
	data: ILeague
}

const League: FC<ILeagueProps> = ({ mode = "default", data: { title, matches } }) => {
	return (
		<div className={`sport-league`}>
			<div className={`sport-league__header sport-league__header--${mode}`}>
				<div className="sport-league__header-name">{title}</div>
				<div className="sport-league__header-markets">
					<div className="sport-league__header-value sport-league__header-value--win-1">
						1
					</div>
					<div className="sport-league__header-value sport-league__header-value--win-X">
						X
					</div>
					<div className="sport-league__header-value sport-league__header-value--win-2">
						2
					</div>
					<div className="sport-league__header-value sport-league__header-value--total">
						Тотал
					</div>
					<div className="sport-league__header-value sport-league__header-value--total-over">
						Б
					</div>
					<div className="sport-league__header-value sport-league__header-value--total-under">
						М
					</div>
				</div>
			</div>
			<div>
				{matches.map(match => (
					<Event
						key={match.id}
						mode={mode}
						data={match}
					/>
				))}
			</div>
		</div>
	)
}

export default League
