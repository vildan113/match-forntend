import cn from "classnames"
import { ComponentProps, FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from "./style.module.css"

interface IBaseProps {
	type?: "default" | "primary"
}

type ButtonProps = IBaseProps &
	ComponentProps<"button"> & { htmlType?: "submit" | "reset" | "button" }

type AnchorProps = IBaseProps &
	ComponentProps<FC<Omit<LinkProps, "to">>> & { href: string; htmlType?: never }

const Component: FC<ButtonProps | AnchorProps> = ({
	type = "default",
	className,
	htmlType,
	children,
	...rest
}) => {
	const sharedProps = {
		className: cn(className, styles["button"], styles[`button--${type}`]),
		children
	}

	if ("href" in rest)
		return (
			<Link
				{...rest}
				{...sharedProps}
				to={rest.href}
			/>
		)

	return (
		<button
			{...rest}
			{...sharedProps}
			type={htmlType}
		/>
	)
}

export default Component
