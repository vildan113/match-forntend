import Logo from "assets/images/Match.svg"
import { FC } from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import "./style.css"

const Header: FC = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<div className="header__logo">
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<menu className="header__menu menu">
					<li className="menu__item">
						<Link
							to="/"
							className="menu__link"
						>
							<span>Спорт</span>
						</Link>
					</li>
					<li className="menu__item">
						<Link
							to="/"
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
		</header>
	)
}

export default Header
