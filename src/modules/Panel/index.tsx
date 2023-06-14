import { ReactComponent as SettingsIcon } from "assets/icons/settings-icon.svg"
import cn from "classnames"
import { Button, Popover, Select } from "components/index"
import { useSearchParamsState } from "hooks/index"
import { observer } from "mobx-react-lite"
import { Settings } from "modules/index"
import { FC, useEffect } from "react"
import { useLocation } from "react-router-dom"
import store from "src/store"
import styles from "./style.module.css"

interface ISettingsProps extends React.ComponentProps<"div"> {
	live: boolean
}

const Panel: FC<ISettingsProps> = ({ live, className, ...props }) => {
	const search = new URLSearchParams(useLocation().search)
	const params = Object.fromEntries(search)

	const [state, setState] = useSearchParamsState({
		timeInterval: Number(params.timeInterval)
	})

	const handleChangeHours = (hours: number) => {
		setState({ timeInterval: hours })
	}

	useEffect(() => {
		store.football.get({ live, hours: state.timeInterval })
	}, [state.timeInterval, live])

	useEffect(() => {
		setState({ timeInterval: Number(params.timeInterval) })
	}, [live])

	return (
		<div
			{...props}
			className={cn(className, styles["panel"])}
		>
			<div className={styles["panel__settings"]}>
				<Popover>
					<Popover.Trigger>
						<Button className={styles["panel__settings-button"]}>
							<SettingsIcon />
						</Button>
					</Popover.Trigger>
					<Popover.Content
						className={styles["panel__settings-popover"]}
						padding={5}
						position="bottom"
						align="start"
					>
						<Settings />
					</Popover.Content>
				</Popover>
				<Select
					className={styles["panel__time-select"]}
					placeholder="Все время"
					value={state?.timeInterval}
					options={[
						{ value: 1, label: "Ближайший час" },
						{ value: 2, label: "Ближайшие 2 ч." },
						{ value: 4, label: "Ближайшие 4 ч." },
						{ value: 6, label: "Ближайшие 6 ч." },
						{ value: 12, label: "Ближайшие 12 ч." },
						{ value: 24, label: "Ближайший день" },
						{ value: 48, label: "Ближайшие 2 дня" }
					]}
					onChange={handleChangeHours}
				/>
			</div>
			<div className={styles["panel__sport-mode"]}>
				<Button
					href="/sports"
					disabled={!live}
					className={cn([styles["panel__sport-mode-button"]], {
						[styles["panel__sport-mode-button--active"]]: !live
					})}
				>
					Прематч
				</Button>
				<Button
					href="/live"
					disabled={live}
					className={cn([styles["panel__sport-mode-button"]], {
						[styles["panel__sport-mode-button--active"]]: live
					})}
				>
					Live
				</Button>
			</div>
		</div>
	)
}

export default observer(Panel)
