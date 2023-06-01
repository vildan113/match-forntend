import xBet, { XBetFootballMatch } from "@betting-api/1xbet"
import { XBetLeague } from "@betting-api/1xbet/typings/football"
import { makeAutoObservable } from "mobx"
import moment from "moment"
import { isEmptyArray } from "src/utils"

export interface IEvent extends XBetFootballMatch {
	minute: number
	seconds: number
	country: string
}

export interface ILeague extends XBetLeague {
	events: IEvent[]
	country: string
}

class FootballStore {
	data: ILeague[] = []
	isLoading = false
	isEmpty = true
	isSuccess = false
	error: any = null

	constructor() {
		makeAutoObservable(this)
	}

	async get({ live }: { live?: boolean }) {
		this.isLoading = true
		try {
			const events = (await xBet.football.getLiveAll()) as IEvent[]
			if (!live) events.push(...((await xBet.football.getPreMatchAll()) as IEvent[]))

			const filteredEvents = events.filter(event => {
				if (event.isLive && !event.minute) return false
				if (event.isLive && !event.seconds) return false
				if (event.isSpecial) return false
				if (event.isComposite) return false
				if (event.team1.includes("/")) return false
				if (event.team2.includes("/")) return false

				return true
			})

			const sortedEvents = filteredEvents.sort((a, b) => {
				return moment(a.date_start).diff(moment(b.date_start))
			})

			const data = sortedEvents.reduce<ILeague[]>((acc, match) => {
				const league = acc.find(league => league.league_id === match.league.league_id)

				if (league) {
					league.events.push(match)
				} else {
					acc.push({
						...match.league,
						country: match.country,
						events: [match]
					})
				}

				return acc
			}, [])

			this.data = data
			this.isSuccess = true
			this.isEmpty = isEmptyArray(sortedEvents)
		} catch (error) {
			this.error = error
		}
		this.isLoading = false
	}

	create() {}

	update() {}

	remove() {}
}

export default new FootballStore()
