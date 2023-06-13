import { ReactComponent as FootballIcon } from "assets/icons/football-icon.svg"
import cn from "classnames"
import { Empty, Footer, LogoLoader } from "components/index"
import { observer } from "mobx-react-lite"
import { Panel, SportTable } from "modules/index"
import { FC, useLayoutEffect } from "react"
import store from "store/index"
import styles from "./style.module.css"

interface ISportsProps {
	live: boolean
}

const Sports: FC<ISportsProps> = ({ live }) => {
	const handleBet = console.log

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 975) {
				store.settings.direction = "horizontal"
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className={cn(styles["sport-page"], "container")}>
			<div
				className={cn(styles["sport-page__main-layout"], {
					[styles["sport-page__main-layout--horizontal"]]:
						store.settings.direction === "horizontal"
				})}
			>
				<Panel
					live={live}
					className={styles["sport-page__panel"]}
				/>
				<div className={styles["sport-page__sports-area"]}>
					{store.football.isLoading ? (
						<LogoLoader />
					) : store.football.isEmpty ? (
						<Empty />
					) : (
						<>
							<SportTable
								mode={store.settings.mode}
								data={store.football.data}
								sport={{ icon: <FootballIcon />, name: "Футбол" }}
								markets={[
									{ value: "winsX", label: "Двойной исход" },
									{ value: "wins", label: "Исходы" },
									{ value: "handicaps", label: "Форы" },
									{ value: "totals", label: "Тоталы" }
								]}
								selectedMarkets={store.settings.markets}
								onBet={handleBet}
							/>
							<SportTable
								mode={store.settings.mode}
								data={store.football.data}
								sport={{ icon: <FootballIcon />, name: "Футбол" }}
								markets={[
									{ value: "winsX", label: "Двойной исход" },
									{ value: "wins", label: "Исходы" },
									{ value: "handicaps", label: "Форы" },
									{ value: "totals", label: "Тоталы" }
								]}
								selectedMarkets={store.settings.markets}
								onBet={handleBet}
							/>
							<Footer className={styles["sport-page__about"]} />
						</>
					)}
				</div>
			</div>
			<div className="sport-page__coupon-layout"></div>
		</div>
	)
}

export default observer(Sports)
