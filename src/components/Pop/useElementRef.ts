import { useMemo, useRef } from "react"
import { createContainer } from "./util"

export const useElementRef = (
	containerClassName?: string,
	containerStyle?: Partial<CSSStyleDeclaration>
) => {
	const ref = useRef<HTMLDivElement>(
		useMemo(
			() => createContainer(containerStyle, containerClassName),
			[containerClassName, containerStyle]
		)
	)

	return ref
}
