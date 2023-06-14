import CompactModeImg from "assets/images/settings-compact-mode.png"
import DefaultModeImg from "assets/images/settings-default-mode.png"
import LeftNavigationImg from "assets/images/settings-left-navigation.png"
import TopNavigationImg from "assets/images/settings-top-navigation.png"
import { Radio } from "components/index"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import store from "store/index"
import styles from "./style.module.css"

const Settings: FC = () => {
	const onChangeDirection = (direction: "horizontal" | "vertical") => {
		store.settings.update({ direction })
	}

	const onChangeMode = (mode: "compact" | "default") => {
		store.settings.update({ mode })
	}

	const onResetMarkets = () => {
		store.settings.update({
			markets: ["winsX", "wins", "handicaps", "totals"]
		})
	}

	return (
		<div className={styles["settings"]}>
			<div>
				<h5>Навигация</h5>
				<Radio.Group
					className={styles["settings__radio-group"]}
					value={store.settings.direction}
					onChange={onChangeDirection}
				>
					<Radio value="vertical">
						<span>Слева</span>
						<img src={LeftNavigationImg} />
					</Radio>
					<Radio value="horizontal">
						<span>Сверху</span>
						<img src={TopNavigationImg} />
					</Radio>
				</Radio.Group>
			</div>
			<div>
				<h5>Роспись событий</h5>
				<Radio.Group
					className={styles["settings__radio-group"]}
					value={store.settings.mode}
					onChange={onChangeMode}
				>
					<Radio value="default">
						<span>Крупный вид</span>
						<img src={DefaultModeImg} />
					</Radio>
					<Radio value="compact">
						<span>Компактный вид</span>
						<img src={CompactModeImg} />
					</Radio>
				</Radio.Group>
			</div>
			<div>
				<button onClick={onResetMarkets}>Восстановить порядок маркетов</button>
			</div>
		</div>
	)
}

export default observer(Settings)
