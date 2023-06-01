import cn from "classnames"
import React, { ComponentProps, FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from "./style.module.css"

interface IBaseProps {
	type?: "default" | "primary"
}

type ButtonProps = IBaseProps &
	Omit<ComponentProps<"button">, "type"> & {
		htmlType?: "submit" | "reset" | "button"
		href?: never
	}

type AnchorProps = IBaseProps & Omit<LinkProps, "to"> & { href: string; htmlType?: never }

const Button: FC<ButtonProps | AnchorProps> & { Group: any } = ({
	type = "default",
	className,
	children,
	...rest
}) => {
	const sharedProps = {
		className: cn(className, styles["button"], styles[`button--${type}`]),
		children
	}

	if (rest.href !== undefined)
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
			type={rest.htmlType}
		/>
	)
}

const Group: FC<React.ComponentProps<"div">> = ({ className, children, ...rest }) => {
	return (
		<div
			className={cn(className, styles["button-group"])}
			{...rest}
		>
			{children}
		</div>
	)
}

Button.Group = Group
export default Button
