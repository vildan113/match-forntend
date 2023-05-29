interface IConfig {
	xBet: {
		token: string
	}
}

const config: IConfig = {
	xBet: {
		token: String(import.meta.env.VITE_XBET_API_KEY)
	}
}

export default config
