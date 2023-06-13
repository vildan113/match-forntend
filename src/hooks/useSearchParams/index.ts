import { useEffect, useState } from "react"
import { clearEmptyProp } from "src/utils"

/**
 * Возвращает массив, содержащий объект state и функцию setSearchParams.
 *
 * @param initialState - Объект начального состояния.
 * @return Масив содержащий:
 *   - Объект состояния, содержащий текущие параметры поиска.
 *   - Функция для обновления параметров поиска, которая также обновляет URL-адрес.
 */
const useSearchParamsState = <T extends Record<string, any>>(initialState: T) => {
	const [state, setState] = useState(clearEmptyProp(initialState))

	const setSearchParams = (newState: Partial<T>) => {
		setState(clearEmptyProp(newState))
	}

	useEffect(() => {
		const url = new URL(location.href)
		url.search = new URLSearchParams(state as T).toString()
		history.pushState(null, "", url)
	}, [state])

	return [state, setSearchParams] as const
}

export default useSearchParamsState
