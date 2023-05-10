interface Match {
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
    league: League
    markets: Markets
    stats?: Stats
}

interface League {
    country_id: number
    league_id: number
    sport_id: number
    name: string
    name_rus: string
    isCyber: boolean
    isSimulated: boolean
    isSpecial: boolean
}

interface Markets {
    totals: Total[]
    totals1: Total[]
    totals2: Total[]
    totalsAsian: Total[]
    totals1Asian: Total[]
    totals2Asian: Total[]
    handicaps1: Handicap[]
    handicaps2: Handicap[]
    bothToScore: {
        yes: Value
        no: Value
    } | {}
    half: Value | {}
    win1?: Value
    winX?: Value
    win2?: Value
    win1X?: Value
    win12?: Value
    winX2?: Value
}

type Total = {
    type: number
    over: Value
    under: Value
}

type Handicap = {
    type: number
} & Value

type Value = { v: number }

interface Stats {
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