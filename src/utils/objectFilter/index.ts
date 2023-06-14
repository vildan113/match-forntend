/**
 * Фильтрует объект и возвращает новый объект, содержащий только те пары ключ-значение,
 * которые соответствуют заданной функции предиката.
 *
 * @param object - Объект для фильтрации.
 * @param predicate - Функция, которую нужно использовать в качестве фильтра.
 * Принимает пару ключ-значение и возвращает логическое значение.
 *
 * @return Объект, содержащий только пары ключ-значение,
 * соответствующие заданной функции-предикату.
 */
const objectFilter = <T extends Record<string, unknown>, K extends keyof T>(
	object: T,
	predicate: (key: K, value: T[K]) => boolean
): Partial<T> => {
	const keys = Object.keys(object) as K[]

	const filteredArray = keys.reduce((acc, key) => {
		if (predicate(key, object[key])) {
			acc[key] = object[key]
		}

		return acc
	}, {} as Partial<T>)

	return filteredArray
}

export default objectFilter
