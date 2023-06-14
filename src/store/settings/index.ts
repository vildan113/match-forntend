import { makeAutoObservable } from "mobx"

type Markets = "winsX" | "wins" | "handicaps" | "totals"

interface ISettings {
	direction: "vertical" | "horizontal"
	mode: "default" | "compact"
	markets: Markets[]
}

class SettingsStore implements ISettings {
	direction: "vertical" | "horizontal" = "horizontal"
	mode: "default" | "compact" = "default"
	markets: Markets[] = ["winsX", "wins", "handicaps", "totals"]

	constructor() {
		makeAutoObservable(this)
	}

	update(settings: Partial<ISettings>) {
		this.direction =
			window.innerWidth < 975 ? "horizontal" : settings.direction || this.direction
		this.mode = settings.mode || this.mode
		this.markets = settings.markets || this.markets
	}
}

export default new SettingsStore()
