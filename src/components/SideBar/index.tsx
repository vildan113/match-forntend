import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg"
import { FC } from "react"
import { Button } from ".."
import Drawer from "../Drawer"
import styles from "./style.module.css"

interface ISideBarProps {
	isOpen: boolean
	onClose: () => void
}

const SideBar: FC<ISideBarProps> = ({ isOpen, onClose }) => {
	return (
		<Drawer
			className={styles["sidebar"]}
			isVisible={isOpen}
			onClose={onClose}
		>
			<div className={styles["sidebar__wrap"]}>
				<div className={styles["sidebar__content"]}>
					<div className={styles["sidebar__menu"]}>
						<Button
							href="/sports"
							onClick={onClose}
						>
							Спорт
						</Button>
						<Button
							href="/live"
							onClick={onClose}
						>
							Live
						</Button>
						<Button disabled>Акции</Button>
						<Button disabled>Статистика</Button>
						<Button disabled>Результаты</Button>
					</div>
				</div>
				<div
					className={styles["sidebar__close-area"]}
					onClick={onClose}
				>
					<CloseIcon className={styles["sidebar__close-icon"]} />
				</div>
			</div>
		</Drawer>
	)
}

export default SideBar
