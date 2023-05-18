import { FC } from "react"
import "./style.css"

interface IButtonProps extends React.ComponentProps<"a"> {
	type?: "default" | "primary"
}

const Button: FC<IButtonProps> = ({ children, type = "default", className, ...rest }) => {
	return (
		<a
			{...rest}
			className={`button button--${type} ${className || ""}`}
		>
			{children}
		</a>
	)
}

export default Button
