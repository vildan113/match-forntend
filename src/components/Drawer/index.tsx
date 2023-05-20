import cn from "classnames"
import { FC, cloneElement } from "react"
import { createPortal } from "react-dom"
import styles from "./style.module.css"

interface IDrawerProps extends React.ComponentProps<"div"> {
	isVisible: boolean
	placement?: "left" | "right" | "top" | "bottom"
	onClose: () => void
	children: JSX.Element
}

const Drawer: FC<IDrawerProps> = ({
	isVisible,
	placement = "left",
	onClose,
	children,
	className,
	...rest
}) => {
	return createPortal(
		<div
			className={cn(
				className,
				styles["drawer"],
				isVisible ? styles["drawer--visible"] : styles["drawer--hidden"]
			)}
			{...rest}
		>
			<div
				className={styles["drawer__mask"]}
				onClick={onClose}
			></div>
			{cloneElement(children, {
				className: cn(
					children.props.className,
					styles["drawer__wrap"],
					styles[`drawer__wrap--${placement}`]
				)
			})}
		</div>,
		document.body
	)
}

export default Drawer
