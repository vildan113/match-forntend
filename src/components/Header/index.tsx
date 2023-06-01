import { ReactComponent as BurgerIcon } from "assets/icons/burger-icon.svg"
import Logo from "assets/images/Match.svg"
import cn from "classnames"
import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
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
						<NavLink to="/home">
							<img src={Logo} />
						</NavLink>
					</div>
				</div>
				<menu className={cn(styles["header__menu"], "menu")}>
					<li className={styles["menu__item"]}>
						<NavLink
							to="/sports"
							className={({ isActive }) =>
								cn(styles["menu__link"], {
									[styles["menu__link--active"]]: isActive
								})
							}
						>
							<span>Спорт</span>
						</NavLink>
					</li>
					<li className={styles["menu__item"]}>
						<NavLink
							to="/live"
							className={({ isActive }) =>
								cn(styles["menu__link"], {
									[styles["menu__link--active"]]: isActive
								})
							}
						>
							<span>Live</span>
						</NavLink>
					</li>
					<li className={cn(styles["menu__item"], styles["menu__item--disabled"])}>
						<NavLink
							to="/promo"
							className={({ isActive }) =>
								cn(styles["menu__link"], {
									[styles["menu__link--active"]]: isActive
								})
							}
							onClick={event => event.preventDefault()}
						>
							<span>Акции</span>
						</NavLink>
					</li>
					<li className={cn(styles["menu__item"], styles["menu__item--disabled"])}>
						<NavLink
							to="/statistic"
							className={({ isActive }) =>
								cn(styles["menu__link"], {
									[styles["menu__link--active"]]: isActive
								})
							}
							onClick={event => event.preventDefault()}
						>
							<span>Статистика</span>
						</NavLink>
					</li>
					<li className={cn(styles["menu__item"], styles["menu__item--disabled"])}>
						<NavLink
							to="/results"
							className={({ isActive }) =>
								cn(styles["menu__link"], {
									[styles["menu__link--active"]]: isActive
								})
							}
							onClick={event => event.preventDefault()}
						>
							<span>Результаты</span>
						</NavLink>
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
