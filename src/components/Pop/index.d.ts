import { CSSProperties, FC, MutableRefObject, Ref } from "react"

export interface ContentLocation {
	top: number
	left: number
}

export interface BoundaryViolations {
	top: number
	left: number
	right: number
	bottom: number
}

export interface PopoverState {
	childRect: CustomClientRect
	popoverRect: CustomClientRect
	parentRect: CustomClientRect
	boundaryRect: CustomClientRect
	position?: PopoverPosition
	align?: PopoverAlign
	padding: number
	nudgedLeft: number
	nudgedTop: number
	boundaryInset: number
	violations: BoundaryViolations
	hasViolations: boolean
}

export type ContentRenderer = (popoverState: PopoverState) => JSX.Element
export type ContentLocationGetter = (popoverState: PopoverState) => ContentLocation

export type PopoverPosition = "left" | "right" | "top" | "bottom"
export type PopoverAlign = "start" | "center" | "end"

export interface UseArrowContainerProps {
	childRect: CustomClientRect
	popoverRect: CustomClientRect
	position?: PopoverPosition
	arrowSize: number
	arrowColor: string
}

export interface ArrowContainerProps extends UseArrowContainerProps {
	children: JSX.Element
	className?: string
	style?: React.CSSProperties
	arrowStyle?: React.CSSProperties
	arrowClassName?: string
}

export interface UsePopoverProps {
	isOpen: boolean
	childRef: React.MutableRefObject<HTMLElement | undefined>
	positions: PopoverPosition[]
	align: PopoverAlign
	padding: number
	reposition: boolean
	boundaryInset: number
	parentElement?: HTMLElement
	boundaryElement?: HTMLElement
	containerClassName?: string
	contentLocation?: ContentLocationGetter | ContentLocation
	onPositionPopover(popoverState: PopoverState): void
}

export interface PopoverProps {
	isOpen: boolean
	children: JSX.Element
	content: ContentRenderer | JSX.Element
	positions?: PopoverPosition[]
	align?: PopoverAlign
	padding?: number
	reposition?: boolean
	ref?: Ref<HTMLElement>
	containerClassName?: string
	parentElement?: HTMLElement
	containerStyle?: Partial<CSSStyleDeclaration>
	contentLocation?: ContentLocationGetter | ContentLocation
	boundaryElement?: HTMLElement
	boundaryInset?: number
	onClickOutside?: (e: MouseEvent) => void
	clickOutsideCapture?: boolean
}

export interface PositionPopoverProps {
	positionIndex?: number
	childRect?: CustomClientRect
	popoverRect?: CustomClientRect
	parentRect?: CustomClientRect
	scoutRect?: CustomClientRect
	parentRectAdjusted?: CustomClientRect
	boundaryRect?: CustomClientRect
}

export type PositionPopover = (props?: PositionPopoverProps) => void

export type PopoverRefs = {
	popoverRef: MutableRefObject<HTMLDivElement>
	scoutRef: MutableRefObject<HTMLDivElement>
}

export type UsePopoverResult = {
	positionPopover: PositionPopover
	popoverRef: MutableRefObject<HTMLDivElement>
	scoutRef: MutableRefObject<HTMLDivElement>
}

export interface UseArrowContainerResult {
	arrowStyle: CSSProperties
	arrowContainerStyle: CSSProperties
}

export const usePopover: (props: UsePopoverProps) => UsePopoverResult
export const useArrowContainer: (props: UseArrowContainerProps) => UseArrowContainerResult

export const Popover: FC<PopoverProps>
export const ArrowContainer: FC<ArrowContainerProps>
