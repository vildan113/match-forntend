/**
 * Checks if the input is an empty array.
 *
 * @param {unknown} param - the input to check if it's an empty array
 * @return {boolean} true if the input is an empty array, false otherwise
 */
export default (param: unknown): boolean => {
	return Array.isArray(param) && param.length === 0
}
