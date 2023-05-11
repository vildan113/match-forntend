interface ILeague {
    title: string
    matches: (ILiveEvent | ILineEvent)[]
}

interface ILiveEvent extends IBasicEvent {
    isLive: true
    time: string
    date_start?: never
}

interface ILineEvent extends IBasicEvent {
    isLive: false
    date_start: string
    time?: never
}

interface IBasicEvent {
    id: number
    team1: {
        id: number
        name: string
        score: number
    }
    team2: {
        id: number
        name: string
        score: number
    }
    url: string
    isLive: boolean
    markets: IMarkets
}

interface IMarkets {
    total: TTotal | null
    win1: number | null
    winX: number | null
    win2: number | null
}

type TTotal = {
    type: number
    over: number
    under: number
}
