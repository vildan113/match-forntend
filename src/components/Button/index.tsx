import cn from "classnames"
import React, { ComponentProps, FC, ForwardRefRenderFunction, Ref, forwardRef } from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from "./style.module.css"

interface IBaseProps {
	type?: "default" | "primary"
	disable?: boolean
}

type ButtonProps = IBaseProps &
	Omit<ComponentProps<"button">, "type"> & {
		htmlType?: "submit" | "reset" | "button"
		href?: never
	}

type AnchorProps = IBaseProps & Omit<LinkProps, "to"> & { href: string; htmlType?: never }

const Button: ForwardRefRenderFunction<HTMLElement, AnchorProps | ButtonProps> & {
	Group: typeof Group
} = ({ type = "default", disable, className, children, ...rest }, ref) => {
	const sharedProps = {
		className: cn(className, styles["button"], styles[`button--${type}`], {
			[styles["button--disabled"]]: disable
		})
	}

	if (rest.href !== undefined)
		return (
			<Link
				{...rest}
				{...sharedProps}
				to={rest.href}
				onClick={disable ? event => event.preventDefault() : rest.onClick}
				ref={ref as Ref<HTMLAnchorElement>}
			>
				<span>{children}</span>
			</Link>
		)

	return (
		<button
			{...rest}
			{...sharedProps}
			type={rest.htmlType}
			onClick={disable ? event => event.preventDefault() : rest.onClick}
			ref={ref as Ref<HTMLButtonElement>}
		>
			{children}
		</button>
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
export default forwardRef(Button)
