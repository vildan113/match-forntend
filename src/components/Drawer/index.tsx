import { FC, cloneElement } from "react"
import { createPortal } from "react-dom"
import "./style.css"

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
			className={`${className || ""} drawer ${
				isVisible ? "drawer--visible" : "drawer--hidden"
			}`}
			{...rest}
		>
			<div
				className="drawer__mask"
				onClick={onClose}
			></div>
			{cloneElement(children, {
				className: `${
					children.props.className || ""
				} drawer__wrap drawer__wrap--${placement}`
			})}
		</div>,
		document.body
	)
}

export default Drawer
