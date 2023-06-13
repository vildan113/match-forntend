export type Markets = "wins" | "winsX" | "handicaps" | "totals"

export type BaseBetData = {
	event_id: number
	market: string
	coefficient: number
}

export interface IBetData extends BaseBetData {
	type: "1" | "2" | "X"
}

export interface ITotalBetData extends BaseBetData {
	type: "over" | "under"
	value: number
}

export interface IHandicapBetData extends BaseBetData {
	type: "handicap1" | "handicap2"
	value: number
}

export interface ISport {
	icon: React.ReactElement
	name: string
}

export interface ILeague {
	league_id: number
	country: string
	name: string
	name_rus: string | null
}

export interface IEvent {
	id: number
	team1: string
	team1_rus: string | null
	team2: string
	team2_rus: string | null
	score1: number
	score2: number
	isLive: boolean
	minute: number
	seconds: number
	date_start: string

	markets: IMarketsMain & IMarketsTotals & IMarketsHandicaps
}

export interface IMarketsMain {
	win1?: Bet
	winX?: Bet
	win2?: Bet
	win1X?: Bet
	win12?: Bet
	winX2?: Bet
}

export interface IMarketsTotals {
	totals: TotalBet[]
	totals1: TotalBet[]
	totals2: TotalBet[]
	totalsAsian: TotalBet[]
	totals1Asian: TotalBet[]
	totals2Asian: TotalBet[]
}

export interface IMarketsHandicaps {
	handicaps1: HandicapBet[]
	handicaps2: HandicapBet[]
}

export type Bet = {
	v: number
}

export type HandicapBet = Bet & {
	type: number
}

export type TotalBet = {
	type: number
	over?: Bet
	under?: Bet
}
