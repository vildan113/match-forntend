import { makeAutoObservable } from "mobx"

type Markets = "winsX" | "wins" | "handicaps" | "totals"

type BetData = {
	event_id: number
	market: Markets
	coefficient: number
	type: string
	value?: number
}

enum CouponType {
	EXPRESS = "express",
	ODINAR = "odinar"
}

class CouponStore {
	bets: BetData[] = []
	type: CouponType = CouponType.ODINAR

	constructor() {
		makeAutoObservable(this)
	}

	clear() {
		this.bets = []
	}

	update(bet: BetData) {
		const include = this.bets.find(b => this.betsAreEqual(b, bet))
		if (include) {
			this.remove(bet)
			return
		}

		const betOnOneMarket = this.bets.find(b => this.betsOnOneMarkets(b, bet))
		if (betOnOneMarket) this.remove(betOnOneMarket)

		this.bets.push(bet)
	}

	remove(bet: BetData) {
		this.bets = this.bets.filter(b => !this.betsAreEqual(b, bet))
	}

	private betsOnOneMarkets(bet1: BetData, bet2: BetData) {
		return bet1.event_id === bet2.event_id && bet1.market === bet2.market
	}

	private betsAreEqual(bet1: BetData, bet2: BetData) {
		return (
			this.betsOnOneMarkets(bet1, bet2) &&
			bet1.coefficient === bet2.coefficient &&
			bet1.type === bet2.type &&
			bet1.value === bet2.value
		)
	}
}

export default new CouponStore()
