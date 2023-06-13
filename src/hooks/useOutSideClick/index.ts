import { RefObject, useEffect } from "react"

/**
 * Вызывает предоставленную функцию обратного вызова,
 * если происходит клик за пределами указанных HTML-элементов.
 * @param callback - Функция, которая вызывается,
 * если происходит клик за пределами элементов.
 * @param refs - Массив ссылок на HTML-элементы для прослушивания.
 */
const useOutSideClick = <T extends HTMLElement>(
	callback: () => void,
	refs: RefObject<T>[]
): void => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const isClickedOutside = refs.every(
				ref => ref.current && !ref.current.contains(event.target as Node)
			)

			if (isClickedOutside) callback()
		}

		document.addEventListener("click", handleClickOutside)

		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [refs])
}

export default useOutSideClick
