import { ReactComponent as FootballIcon } from "assets/icons/football-icon.svg"
import cn from "classnames"
import { Empty, LogoLoader } from "components/index"
import { observer } from "mobx-react-lite"
import { Panel, SportTable } from "modules/index"
import { FC } from "react"
import store from "store/index"
import styles from "./style.module.css"

interface ISportsProps {
	live: boolean
}

const Sports: FC<ISportsProps> = ({ live }) => {
	const handleBet = console.log

	return (
		<div className={cn(styles["sport-page"], "container")}>
			<div
				className={cn(styles["sport-page__main-layout"], {
					[styles["sport-page__main-layout--horizontal"]]:
						store.settings.direction === "horizontal"
				})}
			>
				<Panel
					live={live}
					className={styles["sport-page__panel"]}
				/>
				<div className={styles["sport-page__sports-area"]}>
					{store.football.isLoading ? (
						<LogoLoader />
					) : store.football.isEmpty ? (
						<Empty />
					) : (
						<>
							<SportTable
								mode={store.settings.mode}
								data={store.football.data}
								sport={{ icon: <FootballIcon />, name: "Футбол" }}
								markets={[
									{ value: "winsX", label: "Двойной исход" },
									{ value: "wins", label: "Исходы" },
									{ value: "handicaps", label: "Форы" },
									{ value: "totals", label: "Тоталы" }
								]}
								selectedMarkets={store.settings.markets}
								onBet={handleBet}
							/>
							<SportTable
								mode={store.settings.mode}
								data={store.football.data}
								sport={{ icon: <FootballIcon />, name: "Футбол" }}
								markets={[
									{ value: "winsX", label: "Двойной исход" },
									{ value: "wins", label: "Исходы" },
									{ value: "handicaps", label: "Форы" },
									{ value: "totals", label: "Тоталы" }
								]}
								selectedMarkets={store.settings.markets}
								onBet={handleBet}
							/>
							<div
								className={styles["sport-page__about"]}
								dangerouslySetInnerHTML={{ __html: f }}
							></div>
						</>
					)}
				</div>
			</div>
			<div className="sport-page__coupon-layout"></div>
		</div>
	)
}

export default observer(Sports)

const f = `<style>/*! CSS Used from: https://origin.pb06e2-resources.com/webStaticPB/header/1.1.12/footer.css */
.foot-image-loader{position:absolute;width:0;height:0;visibility:hidden;overflow:hidden;z-index:-1;}
.foot{position:relative;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;font-family:"Inter",Arial,Helvetica,sans-serif;font-size:11px;-webkit-font-smoothing:antialiased;}
.foot *{-webkit-box-sizing:content-box;box-sizing:content-box;}
.foot._device_desktop{-webkit-transform:translateY(0);transform:translateY(0);}
.foot__wrap{position:relative;}
.foot__frame-overlay{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;border:none;background-color:transparent;z-index:-1;}
.foot-apps__list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;}
.foot-apps__list-item_wrap{border-radius:100px;background-color:#ECEFF3;margin-left:10px;text-decoration:none;letter-spacing:0.3px;color:rgba(25,42,62,0.8);}
.foot-apps__list-item_wrap.pariBet{background-color:rgba(134,135,136,0.2);}
.foot-apps__list-item_wrap:first-child{margin:0;}
.foot-apps__list-item{display:inline-block;height:20px;width:20px;vertical-align:top;}
.foot-apps__list-item_content{display:-webkit-box;display:-ms-flexbox;display:flex;margin:4px 12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.foot-apps__list-item_caption{margin-left:10px;font-size:12px;}
.foot-apps__list-item_caption_text{font-size:10px;}
.foot-company{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:54px;padding:10px 20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid rgba(25,42,62,0.05);}
.foot-company__text{float:left;margin:0 20px 0 0;color:rgba(25,42,62,0.8);line-height:20px;}
.foot-company__left-row{margin:3px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(25,42,62,0.8);}
.foot-company__left-row:first-child{margin:0;}
.foot-company__link-inner{float:left;margin:0 10px 0 0;}
.foot-company__link{display:inline-block;padding:3px 4px;font-size:10px;border:1px solid rgba(25,42,62,0.15);color:rgba(25,42,62,0.8);text-decoration:none;white-space:nowrap;border-radius:2px;}
.foot-company__link:hover{border-color:#24668C;color:#24668C;}
.foot-company__menu-link{color:rgba(25,42,62,0.8);text-decoration:none;line-height:20px;}
.foot-company__menu-link:hover{color:#24668C;text-decoration:underline;}
.foot-info{border-top:1px solid rgba(25,42,62,0.05);padding:20px 20px 22px;}
.foot-info__inner{margin:-20px 0 0 -20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}
.foot-info__left,.foot-info__right{margin:20px 0 0 20px;}
.foot-info__left{white-space:nowrap;}
.foot-info__right{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:29px;text-align:right;}
.foot-info__menu-col{margin:0 0 0 40px;display:inline-block;vertical-align:top;white-space:normal;}
.foot-info__menu-col:first-child{margin:0;}
.foot-info__menu{margin:0;padding:0;list-style:none;font-size:12px;}
.foot-info__menu-item{margin:9.6px 0 0;}
.foot-info__menu-item:first-child{margin:0;}
.foot-info__menu-link{color:rgba(25,42,62,0.8);letter-spacing:0.3px;text-decoration:none;}
.foot-info__menu-link:not(._state_active):hover{text-decoration:underline;color:#24668C;}
.foot-info__contacts,.foot-info__socials{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;}
.foot-info__socials-block{padding:20px;border-top:1px solid rgba(25,42,62,0.05);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.foot-info__contactsAndApps{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;}
.foot-info__contacts{min-width:145px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#fff;font-size:15px;}
.foot-info__contacts-item{margin-top:5px;font-size:14px;line-height:16px;letter-spacing:0.5px;font-weight:500;}
.foot-info__contacts-item:first-child{margin:0;}
.foot-info__contacts-link{color:rgba(25,42,62,0.8);text-decoration:none;}
.foot-info__contacts-link:not(._type_normal):hover{color:#24668C;}
.foot-logo__link,.foot-logo__icon-hover{background:no-repeat 50%;background-size:contain;}
.foot-logo__link-inner{height:100%;width:100%;}
.foot-logo__link{position:relative;display:block;height:100%;width:100%;}
.foot-logo__link:hover .foot-logo__icon-hover{opacity:1;}
.foot-logo__icon-hover{display:block;height:100%;width:100%;opacity:0;-webkit-transition:.2s opacity;transition:.2s opacity;}
.foot-socials{margin:-10px 0 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;}
.foot-socials__link{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0 0 10px;height:30px;width:30px;line-height:38px;border-radius:50%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:.3s background, .3s top;transition:.3s background, .3s top;text-decoration:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.foot-socials__link:first-child{margin-left:0;}
.foot-socials__link:active{top:1px;}
.foot-sponsors{padding:20px 20px;border-top:1px solid rgba(25,42,62,0.05);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;}
.foot-sponsors__items{width:100%;margin-top:-20px;max-width:1000px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;}
.foot-sponsors__item{display:inline-block;padding:19px 0 0 40px;height:40px;width:40px;min-width:40px;vertical-align:top;}
.foot-sponsors__item:first-child{padding-left:0;}
.foot-legal{border-top:1px solid rgba(25,42,62,0.05);padding:10px 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
.foot-legal__text{color:rgba(25,42,62,0.8);font-size:10px;line-height:16px;}
.foot._theme_pariBet{background:#0D0E11;font-family:"Inter",Arial,Helvetica,sans-serif;}
.foot._theme_pariBet:after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background-color:rgba(255,255,255,0.05);}
.foot._theme_pariBet .foot-info{border:none;}
.foot._theme_pariBet .foot-info__contacts-item{font-weight:600;}
.foot._theme_pariBet .foot-info__contacts-link{color:rgba(243,243,243,0.8);}
.foot._theme_pariBet .foot-info__contacts-link:not(._type_normal):hover{color:#10CB1F;}
.foot._theme_pariBet .foot-info__menu-link{color:rgba(243,243,243,0.8);}
.foot._theme_pariBet .foot-info__menu-link:hover{color:#10CB1F;text-decoration:none;}
.foot._theme_pariBet .foot-sponsors,.foot._theme_pariBet .foot-company,.foot._theme_pariBet .foot-legal{border-color:rgba(255,255,255,0.05);}
.foot._theme_pariBet .foot-company__link{border-color:rgba(243,243,243,0.8);color:rgba(243,243,243,0.8);}
.foot._theme_pariBet .foot-company__link:hover{border-color:#10CB1F;color:#10CB1F;}
.foot._theme_pariBet .foot-company__text{color:rgba(243,243,243,0.8);}
.foot._theme_pariBet .foot-company__menu-link{color:rgba(243,243,243,0.8);}
.foot._theme_pariBet .foot-company__menu-link:hover{color:#10CB1F;text-decoration:none;}
.foot._theme_pariBet .foot-legal__text{color:rgba(243,243,243,0.8);}
p,div,span{padding:0;margin:0;list-style-type:none;}
/*! CSS Used from: https://origin.pb06e2-resources.com/webStaticPB/fon/static/4.25.0/style.css */
p{padding:0;margin:0;}
.page ::-webkit-scrollbar{width:8px;}
.page ::-webkit-scrollbar-thumb{background-color:#ccc;}
.page ::-webkit-scrollbar-thumb:hover{background-color:#24668c;}
.page ::-webkit-scrollbar-track{border-width:0;}
/*! CSS Used fontfaces */
@font-face{font-family:"Inter";font-weight:500;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Medium.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:400;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Regular.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:300;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Light.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:700;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Bold.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:500;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Medium.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:400;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Regular.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:300;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Light.woff) format("woff");}
@font-face{font-family:"Inter";font-weight:700;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/header/fonts/Inter/Inter-Bold.woff) format("woff");}
@font-face{font-family:Inter;font-weight:300;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/fon/static/fonts/Inter-Light.woff) format("woff");}
@font-face{font-family:Inter;font-weight:400;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/fon/static/fonts/Inter-Regular.woff) format("woff");}
@font-face{font-family:Inter;font-weight:500;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/fon/static/fonts/Inter-Medium.woff) format("woff");}
@font-face{font-family:Inter;font-weight:600;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/fon/static/fonts/Inter-SemiBold.woff) format("woff");}
@font-face{font-family:Inter;font-weight:700;font-style:normal;src:url(https://origin.pb06e2-resources.com/webStaticPB/fon/static/fonts/Inter-Bold.woff) format("woff");}</style><div id="footerContainer"><div class="foot__wrap"><footer class="foot _theme_pariBet _mode_compact _state_compact _device_desktop"><div class="foot-info"><div class="foot-info__inner"><div class="foot-info__left"><div class="foot-info__menu-col"><div class="foot-info__menu"><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/apps/" target="_parent">Приложения</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/pages/payments/" target="_parent">Платежи</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/rules/" target="_parent">Правила</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/pages/promo/" target="_parent">Акции</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/specials/partners/" target="_blank">Наши партнеры </a></div></div></div><div class="foot-info__menu-col"><div class="foot-info__menu"><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/news/pari/" target="_parent">Новости</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/news/blog/" target="_parent">Блог</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/pages/affiliates/" target="_parent">Партнерская Программа</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/pages/media/" target="_parent">Информация для СМИ</a></div><div class="foot-info__menu-item"><a class="foot-info__menu-link" href="https://www.pari.ru/promo/bestsp/" target="_blank">Лучшая служба поддержки</a></div></div></div></div><div class="foot-info__right"><div class="foot-info__right-inner"><div class="foot-info__contactsAndApps"><div class="foot-info__contacts"><div class="foot-info__contacts-item"><a class="foot-info__contacts-link _type_normal" href="tel:88007707371">8 (800) 770-73-71</a></div><div class="foot-info__contacts-item"><a class="foot-info__contacts-link" href="mailto:support@pari.ru">support@pari.ru</a></div></div></div><div class="foot-info__socials"><a class="foot-apps__list-item_wrap pariBet" href="https://wa.me/79614321194" target="_blank" style="color: rgb(202, 202, 203); margin-top: 10px; width: 113px;"><div class="foot-apps__list-item_content"><div class="foot-apps__list-item"><div class="foot-logo__link" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/whatsapp-gray_1.svg&quot;);"></div></div><div class="foot-apps__list-item_caption"><div><div class="foot-markdown"><p>WhatsApp</p>
</div></div></div></div></a><a class="foot-apps__list-item_wrap pariBet" href="https://t.me/PARI_support_bot" target="_blank" style="color: rgb(202, 202, 203); margin-top: 10px; width: 113px;"><div class="foot-apps__list-item_content"><div class="foot-apps__list-item"><div class="foot-logo__link" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/tg-gray_1.svg&quot;);"></div></div><div class="foot-apps__list-item_caption"><div><div class="foot-markdown"><p>Telegram</p>
</div></div></div></div></a></div></div></div></div></div><div class="foot-info__socials-block"><div class="foot-apps__list"><a class="foot-apps__list-item_wrap pariBet" href="https://www.pari.ru/apps/" target="_blank" style="color: rgb(202, 202, 203);"><div class="foot-apps__list-item_content"><div class="foot-apps__list-item"><div class="foot-logo__link" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Apps/Icons/apple_grey_1.svg&quot;);"></div></div><div class="foot-apps__list-item_caption"><div class="foot-apps__list-item_caption_text"><div class="foot-markdown"><p>Приложение для iOS</p>
</div></div></div></div></a><a class="foot-apps__list-item_wrap pariBet" href="https://www.pari.ru/apps/" target="_blank" style="color: rgb(202, 202, 203);"><div class="foot-apps__list-item_content"><div class="foot-apps__list-item"><div class="foot-logo__link" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Apps/Icons/android_grey.svg&quot;);"></div></div><div class="foot-apps__list-item_caption"><div class="foot-apps__list-item_caption_text"><div class="foot-markdown"><p>Приложение для Android</p>
</div></div></div></div></a></div><div class="foot-info__socials"><div class="foot-socials"><span class="foot-socials__link"><div class="foot-logo__link-inner"><a class="foot-logo__link" href="https://vk.com/bc_pari" title="ВКонтакте" target="_blank" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/vk-gray-dark.svg&quot;);"><i class="foot-logo__icon-hover" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/vk-color-2.svg&quot;);"></i></a></div></span><span class="foot-socials__link"><div class="foot-logo__link-inner"><a class="foot-logo__link" href="https://t.me/bc_pari" title="Telegram" target="_blank" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/tg-gray-dark.svg&quot;);"><i class="foot-logo__icon-hover" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/tg-color.svg&quot;);"></i></a></div></span><span class="foot-socials__link"><div class="foot-logo__link-inner"><a class="foot-logo__link" href="https://t.me/bc_pari_esports" title="Esports" target="_blank" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Footer/Socials/esports-gray.svg&quot;);"><i class="foot-logo__icon-hover" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Footer/Socials/esports-color.svg&quot;);"></i></a></div></span><span class="foot-socials__link"><div class="foot-logo__link-inner"><a class="foot-logo__link" href="https://www.youtube.com/channel/UCtQUZr2nUrRIUYo86n9DbSw" title="YouTube" target="_blank" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/youtube-gray-dark-2.svg&quot;);"><i class="foot-logo__icon-hover" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentCommon/NewFooter/Socials/new/youtube-color.svg&quot;);"></i></a></div></span></div></div></div><div class="foot-sponsors"><div class="foot-sponsors__items" style="justify-content: center;"><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Титульный спонсор ФК ПАРИ НН" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/parinn_logo.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Титульный спонсор ФК Торпедо" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/Torpedo.svg.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Титульный спонсор БК ПАРИ НН" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/parinn_logo_tr.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный партнер ХК Торпедо" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/HC_Torpedo_logo.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный партнер ХК Северсталь" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/HC_Severstal_logo.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный партнер ХК Адмирал" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/Admiral.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный партнер ХК Витязь" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/hockey_club_vityaz.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный партнер ХК Нефтехимик" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/HC_Neftekhimik.svg.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Официальный спонсор ПФК Спартак" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/Spartak_1.png&quot;);"></a></div></div><div class="foot-sponsors__item"><div class="foot-logo__link-inner"><a class="foot-logo__link" title="Рейтинг Букмекеров" target="_parent" style="background-image: url(&quot;//origin.pb06e2-resources.com/ContentPB/Icons/Sponsorship/stamp-recommend-sng-black_1.svg&quot;);"></a></div></div></div></div><div class="foot-company"><div class="foot-company__left"><div class="foot-company__left-row"><a class="foot-company__menu-link" href="https://www.pari.ru/pages/official-documents/" target="_parent">Официальные документы по букмекерской конторе</a></div><div class="foot-company__left-row"><div class="foot-company__link-inner"><a class="foot-company__link" href="https://www.pari.ru/pages/official-documents/" target="_parent">18+</a></div><div class="foot-company__text"><div class="foot-markdown"><p>© Букмекерская контора PARI. 2023</p>
</div></div></div></div></div><div class="foot-legal"><div class="foot-legal__text"><div class="foot-markdown"><p>ООО «БК «ПАРИ». Адрес места нахождения 109316, Москва г, Волгоградский пр-кт, дом № 43, корпус 3, этаж 1, помещение II, комната 80</p>
</div></div></div></footer><iframe class="foot__frame-overlay js-frame-overlay"></iframe><div class="foot-image-loader"><a class="foot__socials-link _icon_fb _state_active"><i class="home-foot__socials-icon"></i></a><a class="foot__socials-link _icon_tw _state_active"><i class="home-foot__socials-icon"></i></a><a class="foot__socials-link _icon_vk _state_active"><i class="home-foot__socials-icon"></i></a><a class="foot__socials-link _icon_in _state_active"><i class="home-foot__socials-icon"></i></a><a class="foot__payment _icon_visa _state_active"></a><a class="foot__payment _icon_mastercard _state_active"></a><a class="foot__payment _icon_qiwi _state_active"></a><a class="foot__app _icon_apple _state_active"></a><a class="foot__app _icon_android _state_active"></a><a class="foot__app _icon_mac-os _state_active"></a><a class="foot__app _icon_windows _state_active"></a><a class="foot__app _icon_apple _lang_ru _state_active"></a><a class="foot__app _icon_android _lang_ru _state_active"></a><a class="foot__app _icon_mac-os _lang_ru _state_active"></a><a class="foot__app _icon_windows _lang_ru _state_active"></a></div></div></div>`
