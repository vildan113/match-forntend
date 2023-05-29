import { makeAutoObservable } from "mobx"

class EventsStore {
	data: any[] = []
	isLoading = false
	isEmpty = true
	isSuccess = false
	error: any = null

	constructor() {
		makeAutoObservable(this)
	}

	get() {}

	create() {}

	update() {}

	remove() {}
}

export default new EventsStore()
