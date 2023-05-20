import { ReactComponent as BurgerIcon } from "assets/icons/burger-icon.svg"
import Logo from "assets/images/Match.svg"
import cn from "classnames"
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import SideBar from "../SideBar"
import styles from "./style.module.css"

const Header: FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const openSidebar = () => setSidebarOpen(true)

	const closeSidebar = () => setSidebarOpen(false)

	return (
		<header className={styles["header"]}>
			<div className={cn("container", styles["header__container"])}>
				<div className={styles["header__left"]}>
					<BurgerIcon
						className={styles["header__burger-icon"]}
						onClick={openSidebar}
					/>
					<div className={styles["header__logo"]}>
						<Link to="/home">
							<img src={Logo} />
						</Link>
					</div>
				</div>
				<menu className={cn(styles["header__menu"], "menu")}>
					<li className="menu__item">
						<Link
							to="/line"
							className={styles["menu__link"]}
						>
							<span>Спорт</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/live"
							className={styles["menu__link"]}
						>
							<span>Live</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className={styles["menu__link"]}
						>
							<span>Акции</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className={styles["menu__link"]}
						>
							<span>Статистика</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className={styles["menu__link"]}
						>
							<span>Результаты</span>
						</Link>
					</li>
				</menu>
				<div className={styles["header__right"]}>
					<Button
						type="default"
						className="header__button"
					>
						Войти
					</Button>
					<Button
						type="primary"
						className="header__button"
					>
						Регистрация
					</Button>
				</div>
			</div>
			<SideBar
				isOpen={sidebarOpen}
				onClose={closeSidebar}
			/>
		</header>
	)
}

export default Header
