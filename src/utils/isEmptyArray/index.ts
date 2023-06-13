/**
 * Проверяет, являются ли входные данные пустым массивом.
 *
 * @param param - Входные данные для проверки, являются ли они пустым массивом.
 * @return `true` если входные данные представляют собой пустой массив,
 * в противном случае `false`
 */
const isEmptyArray = (param: unknown[]): boolean => {
	return Array.isArray(param) && param.length === 0
}

export default isEmptyArray
