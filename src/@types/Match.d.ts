interface IMatch {
    v: number
    id: number
    team1: string
    team1_rus: string
    team1_id: number
    team2: string
    team2_rus: string
    team2_id: number
    score1: number
    score2: number
    href: string
    date_start: string
    isLive: boolean
    isComposite: boolean
    isSpecial: boolean
    minute?: number
    seconds?: number
    half_order_index: number
    title: string
    country: string
    hash: string
    actual_at: string
    league: ILeague
    markets: IMarkets
    stats?: IStats
}

interface ILeague {
    country_id: number
    league_id: number
    sport_id: number
    name: string
    name_rus: string
    isCyber: boolean
    isSimulated: boolean
    isSpecial: boolean
}

interface IMarkets {
    totals: TTotal[]
    totals1: TTotal[]
    totals2: TTotal[]
    totalsAsian: TTotal[]
    totals1Asian: TTotal[]
    totals2Asian: TTotal[]
    handicaps1: THandicap[]
    handicaps2: THandicap[]
    bothToScore: {
        yes: TValue
        no: TValue
    } | {}
    half: TValue | {}
    win1?: TValue
    winX?: TValue
    win2?: TValue
    win1X?: TValue
    win12?: TValue
    winX2?: TValue
}

type TTotal = {
    type: number
    over: TValue
    under: TValue
}

type THandicap = {
    type: number
} & TValue

type TValue = { v: number }

interface IStats {
    corners1?: number
    yellow_cards1?: number
    red_cards1?: number
    subs1?: number
    shoots_on1?: number
    shoots_off1?: number
    attacks1?: number
    attacks_danger_1?: number
    corners2?: number
    yellow_cards2?: number
    red_cards2?: number
    subs2?: number
    shoots_on2?: number
    shoots_off2?: number
    attacks2?: number
    attacks_danger_2?: number
    free_kicks1?: number
    free_kicks2?: number
} 