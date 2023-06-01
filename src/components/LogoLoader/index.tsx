import { ReactComponent as Logo } from "assets/logo-loader.svg"
import cn from "classnames"
import { ComponentProps, FC } from "react"
import styles from "./style.module.css"

const LogoLoader: FC<ComponentProps<"div">> = ({ className, ...rest }) => {
	return (
		<div
			className={cn(className, styles["logo-loader"])}
			{...rest}
		>
			<Logo />
		</div>
	)
}

export default LogoLoader
