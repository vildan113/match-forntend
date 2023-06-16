import cn from "classnames"
import { Link, LinkProps } from "react-router-dom"
import styles from "./style.module.css"

interface IBaseProps {
	type?: "default" | "primary"
	disabled?: boolean
}

type ButtonProps = IBaseProps &
	Omit<React.ComponentProps<"button">, "type"> & {
		htmlType?: "submit" | "reset" | "button"
		href?: never
	}

type AnchorProps = IBaseProps & Omit<LinkProps, "to"> & { href: string; htmlType?: never }

const Button: React.FC<AnchorProps | ButtonProps> & { Group: typeof Group } = ({
	type = "default",
	disabled,
	className,
	onClick,
	children,
	...rest
}) => {
	const sharedProps = {
		onClick: (
			event: React.MouseEvent<HTMLAnchorElement, MouseEvent> &
				React.MouseEvent<HTMLButtonElement, MouseEvent>
		) => {
			if (disabled) {
				event.preventDefault()
				return
			}

			if (!onClick) return

			onClick(event)
		},
		className: cn(className, styles["button"], styles[`button--${type}`], {
			[styles["button--disabled"]]: disabled
		})
	}

	if (rest.href !== undefined)
		return (
			<Link
				{...rest}
				{...sharedProps}
				to={rest.href}
			>
				<span>{children}</span>
			</Link>
		)

	return (
		<button
			{...rest}
			{...sharedProps}
			type={rest.htmlType}
		>
			{children}
		</button>
	)
}

const Group: React.FC<React.ComponentProps<"div">> = ({ className, children, ...rest }) => {
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
