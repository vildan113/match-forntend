import { ReactComponent as CloseIcon } from "assets/icons/close-icon.svg"
import { FC } from "react"
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
				<div className={styles["sidebar__content"]}></div>
				<CloseIcon
					className={styles["sidebar__close-icon"]}
					onClick={onClose}
				/>
			</div>
		</Drawer>
	)
}

export default SideBar
