import { objectFilter } from "utils/index"

/**
 * Удаляет из объекта все свойства с falsy значениями
 * и возвращает результат.
 *
 * @param object - Объект, из которого нужно удалить пустые свойства.
 * @return Новый объект с удаленными нулевыми и неопределенными свойствами.
 */
const clearEmptyProp = <T extends Record<string, unknown>>(object: T): Partial<T> => {
	return objectFilter(object, (_key, value) => !!value)
}

export default clearEmptyProp
