import { ReactComponent as EsportsIcon } from "assets/icons/esports-icon.svg"
import { ReactComponent as TgIcon } from "assets/icons/tg-icon.svg"
import { ReactComponent as VkIcon } from "assets/icons/vk-icon.svg"
import { ReactComponent as YouTubeIcon } from "assets/icons/youtube-icon.svg"
import { FC } from "react"
import styles from "./style.module.css"

const Footer: FC<React.ComponentProps<"footer">> = () => {
	return (
		<footer className={styles["footer"]}>
			<div className={styles["footer__info"]}>
				<div className={styles["footer__info-left"]}>
					<div className={styles["footer__info-menu"]}>
						<span>Приложения</span>
						<span>Платежи</span>
						<span>Правила</span>
						<span>Акции</span>
						<span>Наши партнеры</span>
					</div>
					<div className={styles["footer__info-menu"]}>
						<span>Новости</span>
						<span>Блог</span>
						<span>Партнерская Программа</span>
						<span>Информация для СМИ</span>
						<span>Лучшая служба поддержки</span>
					</div>
				</div>
				<div className={styles["footer__info-right"]}>
					<span>8 (800) 800-800</span>
					<span>support@mail.ru</span>
				</div>
			</div>
			<div className={styles["footer__socials"]}>
				<VkIcon />
				<TgIcon />
				<EsportsIcon />
				<YouTubeIcon />
			</div>
		</footer>
	)
}

export default Footer
