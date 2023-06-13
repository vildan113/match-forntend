import { ReactComponent as DownIcon } from "assets/icons/chevron-down.svg"
import cn from "classnames"
import { Button, Empty } from "components/index"
import { useOutSideClick } from "hooks/index"
import { Children, FC, useEffect, useMemo, useRef, useState } from "react"
import styles from "./style.module.css"

type Value = string | number

type Option<T extends Value> = {
	value: T
	label: React.ReactNode
}

interface ISelectProps<T extends Value>
	extends Omit<React.ComponentProps<"div">, "placeholder" | "onChange"> {
	placeholder?: React.ReactNode
	value?: Option<T>["value"]
	label?: Option<T>["label"]
	defaultValue?: T
	options?: Option<T>[]
	onChange?: (value: T) => void
	children?: React.ReactElement | React.ReactElement[]
}

function Select<T extends Value>({
	className,
	placeholder,
	value,
	label,
	defaultValue,
	onChange = () => {},
	children,
	style,
	...rest
}: ISelectProps<T>) {
	const [currentValue, setCurrentValue] = useState<T>()
	const [isOpen, setIsOpen] = useState(false)

	const dropdownRef = useRef<HTMLUListElement>(null)

	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation()
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: T) => {
		event.stopPropagation()
		setCurrentValue(value)
		setIsOpen(false)
		onChange(value)
	}

	useOutSideClick(() => setIsOpen(false), [dropdownRef])

	useEffect(() => {
		if (currentValue == null) setCurrentValue(defaultValue)
	}, [])

	useEffect(() => {
		setCurrentValue(value)
	}, [value])

	const options = useMemo(() => {
		if (rest.options) return rest.options

		if (children)
			return Children.map(
				children,
				(child: { props: { value: T; children: React.ReactNode } }) => {
					if (typeof child !== "object") return

					return {
						value: child.props.value,
						label: child.props.children || child.props.value
					}
				}
			)

		return []
	}, [children, rest.options])

	const dropdown = useMemo(() => {
		if (options.length > 0)
			return options.map(option => {
				const isSelected = currentValue === option.value

				return (
					<Option
						key={option.value}
						className={cn({
							[styles["select-option--selected"]]: isSelected
						})}
						onClick={event => handleOptionClick(event, option.value)}
					>
						{option.label || option.value}
					</Option>
				)
			})

		return <Empty />
	}, [currentValue, options])

	return (
		<div
			style={style}
			className={cn(className, styles["select"], { [styles["select--open"]]: isOpen })}
		>
			<Button
				className={cn(styles["select__button"])}
				onClick={handleButtonClick}
			>
				{label || (
					<>
						<span className={styles["select__button-span"]}>
							{options.find(o => o.value === currentValue)?.label ||
								currentValue ||
								placeholder}
						</span>
						<DownIcon className={styles["select__down-icon"]} />
					</>
				)}
			</Button>
			{isOpen && (
				<ul
					ref={dropdownRef}
					className={styles["select__dropdown"]}
				>
					{dropdown}
				</ul>
			)}
		</div>
	)
}

const Option: FC<React.ComponentProps<"li">> = ({ className, children, ...rest }) => {
	return (
		<li
			className={cn(className, styles["select-option"])}
			{...rest}
		>
			<span className={styles["select-option__caption"]}>{children}</span>
		</li>
	)
}

Select.Option = Option
export default Select
