import bannerImage from "assets/images/banner-bg.png"
import coin1Image from "assets/images/coin-1.webp"
import coin2Image from "assets/images/coin-2.webp"
import cn from "classnames"
import { Button } from "components/index"
import { FC } from "react"
import styles from "./style.module.css"

const Home: FC = () => {
	return (
		<div className={styles["homepage"]}>
			<div className={cn("container", styles["homepage__container"])}>
				<div className="homepage__content-shape content-shape">
					<img
						alt="coin-image"
						src={coin2Image}
						width="63"
						height="55"
						decoding="async"
						className={styles["content-shape__coin-1"]}
						loading="lazy"
					/>
					<img
						alt="coin-image"
						src={coin1Image}
						width="89"
						height="73"
						decoding="async"
						className={styles["content-shape__coin-2"]}
						loading="lazy"
					/>
					<img
						alt="coin-image"
						src={coin2Image}
						width="63"
						height="55"
						decoding="async"
						className={styles["content-shape__coin-3"]}
						loading="lazy"
					/>
				</div>
				<div className={styles["homepage__wrap"]}>
					<div className={styles["homepage__text-section"]}>
						<h1 style={{ fontSize: "76px", lineHeight: "98.8px" }}>Bet & Win Today!</h1>
						<p style={{ fontSize: "24px", lineHeight: "36px", marginBottom: "24px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
							tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac
							felis id interdum.
						</p>
						<Button
							href="/sports"
							type="primary"
							className={styles["homepage__button"]}
						>
							Get Started
						</Button>
					</div>
					<div className={styles["homepage__image-section"]}>
						<img
							src={bannerImage}
							decoding="async"
							loading="lazy"
							alt="banner-image"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
