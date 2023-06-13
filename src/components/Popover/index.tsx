import cn from "classnames"
import {
	FC,
	cloneElement,
	createContext,
	useContext,
	useLayoutEffect,
	useRef,
	useState
} from "react"
import { createPortal } from "react-dom"
import { useOutSideClick } from "src/hooks"
import styles from "./style.module.css"

interface IPopoverProps {
	children: React.ReactNode
}

interface IPopoverState {
	isOpen: boolean
	triggerRef?: React.RefObject<HTMLElement>
}

interface IPopoverContext extends IPopoverState {
	setState: React.Dispatch<React.SetStateAction<IPopoverState>>
}

interface ITriggerProps {
	children: React.ReactElement
}

interface IContentProps extends React.ComponentProps<"div"> {
	padding?: number
	position?: "top" | "bottom" | "left" | "right"
	align?: "start" | "center" | "end"
}

//@ts-ignore
const PopoverContext = createContext<IPopoverContext>()

export const EMPTY_CLIENT_RECT: CustomClientRect = {
	top: 0,
	left: 0,
	bottom: 0,
	height: 0,
	right: 0,
	width: 0
}

interface CustomClientRect {
	top: number
	left: number
	bottom: number
	height: number
	right: number
	width: number
}

const rectsAreEqual = (rectA: CustomClientRect, rectB: CustomClientRect) =>
	rectA.bottom === rectB.bottom &&
	rectA.height === rectB.height &&
	rectA.left === rectB.left &&
	rectA.right === rectB.right &&
	rectA.top === rectB.top &&
	rectA.width === rectB.width

const Popover: FC<IPopoverProps> & {
	Trigger: typeof Trigger
	Content: typeof Content
} = ({ children }) => {
	const [state, setState] = useState<IPopoverState>({
		isOpen: false
	})

	return (
		<PopoverContext.Provider value={{ ...state, setState }}>{children}</PopoverContext.Provider>
	)
}

const Trigger: FC<ITriggerProps> = ({ children }) => {
	const { setState } = useContext(PopoverContext)

	const triggerRef = useRef<HTMLElement>(null)

	const handleClick = () => setState(prev => ({ ...prev, isOpen: !prev.isOpen }))

	useLayoutEffect(() => {
		setState(prev => ({ ...prev, triggerRef }))
	}, [triggerRef])

	return cloneElement(children, {
		ref: triggerRef,
		onClick: () => {
			children.props.onClick?.()
			handleClick()
		}
	})
}

const Content: FC<IContentProps> = ({
	padding = 0,
	position = "top",
	align = "center",
	style,
	className,
	children,
	...rest
}) => {
	const { isOpen, triggerRef, setState } = useContext(PopoverContext)

	const popoverRef = useRef<HTMLDivElement>(null)

	const [rect, setRect] = useState({
		top: 0,
		left: 0,
		maxHeight: 0
	})

	const getPosition = ({
		popoverRect,
		triggerRect
	}: {
		popoverRect: DOMRect
		triggerRect: DOMRect
	}) => {
		let left = 0,
			top = 0

		switch (position) {
			case "top":
				left = triggerRect.left
				top = triggerRect.top - popoverRect.height - padding

				if (align === "center") {
					left += (triggerRect.width - popoverRect.width) / 2
				}

				if (align === "end") {
					left += triggerRect.width - popoverRect.width
				}
				break
			case "bottom":
				left = triggerRect.left
				top = triggerRect.top + triggerRect.height + padding

				if (align === "center") {
					left += (triggerRect.width - popoverRect.width) / 2
				}

				if (align === "end") {
					left += triggerRect.width - popoverRect.width
				}
				break
			case "left":
				left = triggerRect.left - popoverRect.width - padding
				top = triggerRect.top

				if (align === "center") {
					top += (triggerRect.height - popoverRect.height) / 2
				}

				if (align === "end") {
					top += triggerRect.height - popoverRect.height
				}
				break
			case "right":
				left = triggerRect.left + triggerRect.width + padding
				top = triggerRect.top

				if (align === "center") {
					top += (triggerRect.height - popoverRect.height) / 2
				}

				if (align === "end") {
					top += triggerRect.height - popoverRect.height
				}
				break
		}

		return { left: left > padding ? left : padding, top: top > padding ? top : padding }
	}

	// const getMaxHeight = ({
	// 	popoverRect
	// }: { popoverRect: DOMRect }) => {
	// 	return window.innerHeight - popoverRect.top - padding
	// }

	useLayoutEffect(() => {
		let animationFrameId: number

		const updateRect = () => {
			if (!isOpen) return

			const popoverElement = popoverRef.current
			const triggerElement = triggerRef?.current

			if (!popoverElement || !triggerElement) return

			const popoverRect = popoverElement.getBoundingClientRect()
			const triggerRect = triggerElement.getBoundingClientRect()

			const { left, top } = getPosition({ popoverRect, triggerRect })
			const maxHeight = window.innerHeight - top - padding

			if (rect.left !== left) setRect(prev => ({ ...prev, left }))
			if (rect.top !== top) setRect(prev => ({ ...prev, top }))
			if (rect.maxHeight !== maxHeight) setRect(prev => ({ ...prev, maxHeight }))

			animationFrameId = requestAnimationFrame(updateRect)
		}

		updateRect()

		return () => {
			cancelAnimationFrame(animationFrameId)
		}
	}, [isOpen, rect])

	useOutSideClick(() => setState(prev => ({ ...prev, isOpen: false })), [popoverRef, triggerRef!])

	if (!isOpen) return null

	return createPortal(
		<div
			ref={popoverRef}
			{...rest}
			style={{
				...style,
				maxHeight: rect.maxHeight,
				transform: `translate(${rect.left}px, ${rect.top}px)`
			}}
			className={cn(className, styles["popover-content"])}
		>
			{children}
		</div>,
		document.body
	)
}

Popover.Trigger = Trigger
Popover.Content = Content

export default Popover
