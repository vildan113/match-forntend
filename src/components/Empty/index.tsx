import { ReactComponent as EmptyIcon } from "assets/icons/empty-icon.svg"
import { FC } from "react"
import styles from "./style.module.css"

const Empty: FC = () => {
	return (
		<div className={styles["empty"]}>
			<EmptyIcon style={{ fontSize: 64 }} />
		</div>
	)
}

export default Empty
