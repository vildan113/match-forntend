import { RefObject, useEffect } from "react"

export default (callback: () => void, ref: RefObject<HTMLElement>) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) callback()
		}

		document.addEventListener("click", handleClickOutside)

		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [ref])
}
