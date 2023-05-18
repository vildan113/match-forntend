import Logo from "assets/images/Match.svg"
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import Drawer from "../Drawer"
import "./style.css"

const Header: FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const openSidebar = () => setSidebarOpen(true)

	const closeSidebar = () => setSidebarOpen(false)

	return (
		<header className="header">
			<div className="container header__container">
				<div className="header__left">
					<div
						className="header__burger-icon"
						onClick={openSidebar}
					>
						<svg
							viewBox="0 0 24 24"
							fill="current"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M19 13H5V11H19V13ZM19 17H5V19H19V17ZM19 5H5V7H19V5Z"></path>
						</svg>
					</div>
					<div className="header__logo">
						<Link to="/home">
							<img src={Logo} />
						</Link>
					</div>
				</div>
				<menu className="header__menu menu">
					<li className="menu__item">
						<Link
							to="/line"
							className="menu__link"
						>
							<span>Спорт</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/live"
							className="menu__link"
						>
							<span>Live</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className="menu__link"
						>
							<span>Акции</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className="menu__link"
						>
							<span>Статистика</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
							className="menu__link"
						>
							<span>Результаты</span>
						</Link>
					</li>
				</menu>
				<div className="header__right">
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
			<Drawer
				className="sidebar"
				isVisible={sidebarOpen}
				onClose={closeSidebar}
			>
				<div className="sidebar__wrap">
					<div className="sidebar__content"></div>
					<div
						className="sidebar__close-icon"
						onClick={closeSidebar}
					>
						<svg
							viewBox="0 0 12 12"
							fill="current"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 1L1 11"
								stroke="currentColor"
								stroke-width="2"
							></path>
							<path
								d="M1 1L11 11"
								stroke="currentColor"
								stroke-width="2"
							></path>
						</svg>
					</div>
				</div>
			</Drawer>
		</header>
	)
}

export default Header
