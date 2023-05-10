import { FC } from "react"
import "./style.css"

interface IButtonProps extends React.ComponentProps<"a"> {
	type?: "default" | "primary"
}
const Button: FC<IButtonProps> = ({ children, type = "default", ...rest }) => {
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
