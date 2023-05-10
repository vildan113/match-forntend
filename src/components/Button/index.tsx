import { FC } from "react"
import "./style.css"

interface IButton extends React.ComponentProps<"a"> {
	type?: "default" | "primary"
}
const Button: FC<IButton> = ({ children, type = "default", ...rest }) => {
	return (
		<a
			{...rest}
			className={`${rest.className} button button--${type}`}
		>
			{children}
		</a>
	)
}

export default Button
